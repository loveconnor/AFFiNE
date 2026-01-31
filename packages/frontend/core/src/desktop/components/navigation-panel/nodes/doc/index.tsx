import {
  type DropTargetDropEvent,
  type DropTargetOptions,
  Loading,
  toast,
  Tooltip,
} from '@lovenotes/component';
import { Guard } from '@lovenotes/core/components/guard';
import { useAppSettingHelper } from '@lovenotes/core/components/hooks/lovenotes/use-app-setting-helper';
import { useAsyncCallback } from '@lovenotes/core/components/hooks/lovenotes-async-hooks';
import { WorkspaceDialogService } from '@lovenotes/core/modules/dialogs';
import { DocsService } from '@lovenotes/core/modules/doc';
import { DocDisplayMetaService } from '@lovenotes/core/modules/doc-display-meta';
import { DocsSearchService } from '@lovenotes/core/modules/docs-search';
import { FeatureFlagService } from '@lovenotes/core/modules/feature-flag';
import { GlobalContextService } from '@lovenotes/core/modules/global-context';
import { NavigationPanelService } from '@lovenotes/core/modules/navigation-panel';
import { GuardService } from '@lovenotes/core/modules/permissions';
import { WorkspaceService } from '@lovenotes/core/modules/workspace';
import type { LoveNotesDNDData } from '@lovenotes/core/types/dnd';
import { useI18n } from '@lovenotes/i18n';
import {
  LiveData,
  MANUALLY_STOP,
  useLiveData,
  useService,
  useServices,
} from '@lovenotes/infra';
import { track } from '@lovenotes/track';
import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { NEVER } from 'rxjs';

import {
  NavigationPanelTreeNode,
  type NavigationPanelTreeNodeDropEffect,
} from '../../tree';
import type { GenericNavigationPanelNode } from '../types';
import { Empty } from './empty';
import { useNavigationPanelDocNodeOperations } from './operations';
import * as styles from './styles.css';

export const NavigationPanelDocNode = ({
  docId,
  onDrop,
  location,
  reorderable,
  isLinked,
  canDrop,
  operations: additionalOperations,
  dropEffect,
  parentPath,
}: {
  docId: string;
  isLinked?: boolean;
  forwardKey?: string;
} & GenericNavigationPanelNode) => {
  const t = useI18n();
  const {
    docsSearchService,
    workspaceService,
    docsService,
    globalContextService,
    docDisplayMetaService,
    featureFlagService,
    guardService,
  } = useServices({
    WorkspaceService,
    DocsSearchService,
    DocsService,
    GlobalContextService,
    DocDisplayMetaService,
    FeatureFlagService,
    GuardService,
  });
  const navigationPanelService = useService(NavigationPanelService);
  const { appSettings } = useAppSettingHelper();

  const active =
    useLiveData(globalContextService.globalContext.docId.$) === docId;
  const path = useMemo(
    () => [...(parentPath ?? []), `doc-${docId}`],
    [parentPath, docId]
  );
  const collapsed = useLiveData(navigationPanelService.collapsed$(path));
  const setCollapsed = useCallback(
    (value: boolean) => {
      navigationPanelService.setCollapsed(path, value);
    },
    [navigationPanelService, path]
  );
  const isCollapsed = appSettings.showLinkedDocInSidebar ? collapsed : true;

  const docRecord = useLiveData(docsService.list.doc$(docId));
  const DocIcon = useLiveData(
    docDisplayMetaService.icon$(docId, {
      reference: isLinked,
    })
  );
  const docTitle = useLiveData(docDisplayMetaService.title$(docId));
  const isInTrash = useLiveData(docRecord?.trash$);
  const enableEmojiIcon = useLiveData(
    featureFlagService.flags.enable_emoji_doc_icon.$
  );

  const Icon = useCallback(
    ({ className }: { className?: string }) => {
      return <DocIcon className={className} />;
    },
    [DocIcon]
  );

  const children = useLiveData(
    useMemo(
      () =>
        LiveData.from(
          !isCollapsed ? docsSearchService.watchRefsFrom(docId) : NEVER,
          null
        ),
      [docsSearchService, docId, isCollapsed]
    )
  );
  const searching = children === null;

  const [referencesLoading, setReferencesLoading] = useState(true);
  useLayoutEffect(() => {
    if (collapsed) {
      return;
    }
    const abortController = new AbortController();
    const undoSync = workspaceService.workspace.engine.doc.addPriority(
      docId,
      10
    );
    const undoIndexer = docsSearchService.indexer.addPriority(docId, 10);
    docsSearchService.indexer
      .waitForDocCompleted(docId, abortController.signal)
      .then(() => {
        setReferencesLoading(false);
      })
      .catch(err => {
        if (err !== MANUALLY_STOP) {
          console.error(err);
        }
      });
    return () => {
      undoSync();
      undoIndexer();
      abortController.abort(MANUALLY_STOP);
    };
  }, [docId, docsSearchService, workspaceService, collapsed]);

  const dndData = useMemo(() => {
    return {
      draggable: {
        entity: {
          type: 'doc',
          id: docId,
        },
        from: location,
      },
      dropTarget: {
        at: 'navigation-panel:doc',
      },
    } satisfies LoveNotesDNDData;
  }, [docId, location]);

  const handleRename = useAsyncCallback(
    async (newName: string) => {
      await docsService.changeDocTitle(docId, newName);
      track.$.navigationPanel.organize.renameOrganizeItem({ type: 'doc' });
    },
    [docId, docsService]
  );

  const handleDropOnDoc = useAsyncCallback(
    async (data: DropTargetDropEvent<LoveNotesDNDData>) => {
      if (data.treeInstruction?.type === 'make-child') {
        if (data.source.data.entity?.type === 'doc') {
          const canEdit = await guardService.can('Doc_Update', docId);
          if (!canEdit) {
            toast(t['com.lovenotes.no-permission']());
            return;
          }
          await docsService.addLinkedDoc(docId, data.source.data.entity.id);
          track.$.navigationPanel.docs.linkDoc({
            control: 'drag',
          });
          track.$.navigationPanel.docs.drop({
            type: data.source.data.entity.type,
          });
        } else {
          toast(t['com.lovenotes.rootAppSidebar.doc.link-doc-only']());
        }
      } else {
        onDrop?.(data);
      }
    },
    [docId, docsService, guardService, onDrop, t]
  );

  const handleDropEffectOnDoc = useCallback<NavigationPanelTreeNodeDropEffect>(
    data => {
      if (data.treeInstruction?.type === 'make-child') {
        if (data.source.data.entity?.type === 'doc') {
          return 'link';
        }
      } else {
        return dropEffect?.(data);
      }
      return;
    },
    [dropEffect]
  );

  const handleDropOnPlaceholder = useAsyncCallback(
    async (data: DropTargetDropEvent<LoveNotesDNDData>) => {
      if (data.source.data.entity?.type === 'doc') {
        const canEdit = await guardService.can('Doc_Update', docId);
        if (!canEdit) {
          toast(t['com.lovenotes.no-permission']());
          return;
        }
        // TODO(eyhn): timeout&error handling
        await docsService.addLinkedDoc(docId, data.source.data.entity.id);
        track.$.navigationPanel.docs.linkDoc({
          control: 'drag',
        });
        track.$.navigationPanel.docs.drop({
          type: data.source.data.entity.type,
        });
      } else {
        toast(t['com.lovenotes.rootAppSidebar.doc.link-doc-only']());
      }
    },
    [docId, docsService, guardService, t]
  );

  const handleCanDrop = useMemo<DropTargetOptions<LoveNotesDNDData>['canDrop']>(
    () => args => {
      const entityType = args.source.data.entity?.type;
      return args.treeInstruction?.type !== 'make-child'
        ? ((typeof canDrop === 'function' ? canDrop(args) : canDrop) ?? true)
        : entityType === 'doc';
    },
    [canDrop]
  );

  const workspaceDialogService = useService(WorkspaceDialogService);
  const operations = useNavigationPanelDocNodeOperations(
    docId,
    useMemo(
      () => ({
        openInfoModal: () => workspaceDialogService.open('doc-info', { docId }),
        openNodeCollapsed: () => setCollapsed(false),
      }),
      [docId, setCollapsed, workspaceDialogService]
    )
  );

  const finalOperations = useMemo(() => {
    if (additionalOperations) {
      return [...operations, ...additionalOperations];
    }
    return operations;
  }, [additionalOperations, operations]);

  if (isInTrash || !docRecord) {
    return null;
  }

  return (
    <NavigationPanelTreeNode
      icon={Icon}
      name={t.t(docTitle)}
      dndData={dndData}
      onDrop={handleDropOnDoc}
      renameable
      extractEmojiAsIcon={enableEmojiIcon}
      collapsed={isCollapsed}
      setCollapsed={setCollapsed}
      collapsible={!!appSettings.showLinkedDocInSidebar}
      canDrop={handleCanDrop}
      to={`/${docId}`}
      onClick={() => {
        track.$.navigationPanel.docs.openDoc();
      }}
      active={active}
      postfix={
        referencesLoading &&
        !isCollapsed && (
          <Tooltip
            content={t[
              'com.lovenotes.rootAppSidebar.docs.references-loading'
            ]()}
          >
            <div className={styles.loadingIcon}>
              <Loading />
            </div>
          </Tooltip>
        )
      }
      reorderable={reorderable}
      renameableGuard={{
        docId,
        action: 'Doc_Update',
      }}
      onRename={handleRename}
      childrenPlaceholder={
        searching ? null : (
          <Empty
            onDrop={handleDropOnPlaceholder}
            noAccessible={!!children && children.length > 0}
          />
        )
      }
      operations={finalOperations}
      dropEffect={handleDropEffectOnDoc}
      data-testid={`navigation-panel-doc-${docId}`}
      explorerIconConfig={{
        where: 'doc',
        id: docId,
      }}
    >
      {appSettings.showLinkedDocInSidebar ? (
        <Guard docId={docId} permission="Doc_Read">
          {canRead =>
            canRead
              ? children?.map((child, index) => (
                  <NavigationPanelDocNode
                    key={`${child.docId}-${index}`}
                    docId={child.docId}
                    reorderable={false}
                    location={{
                      at: 'navigation-panel:doc:linked-docs',
                      docId,
                    }}
                    parentPath={path}
                    isLinked
                  />
                ))
              : null
          }
        </Guard>
      ) : null}
    </NavigationPanelTreeNode>
  );
};
