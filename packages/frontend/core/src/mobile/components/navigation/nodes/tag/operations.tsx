import {
  DeleteIcon,
  FolderIcon,
  PlusIcon,
  SplitViewIcon,
} from '@blocksuite/icons/rc';
import {
  IconButton,
  MenuItem,
  MenuSeparator,
  toast,
  useConfirmModal,
} from '@lovenotes/component';
import { usePageHelper } from '@lovenotes/core/blocksuite/block-suite-page-list/utils';
import { IsFavoriteIcon } from '@lovenotes/core/components/pure/icons';
import type { NodeOperation } from '@lovenotes/core/desktop/components/navigation-panel';
import { WorkspaceDialogService } from '@lovenotes/core/modules/dialogs';
import { DocsService } from '@lovenotes/core/modules/doc';
import { FavoriteService } from '@lovenotes/core/modules/favorite';
import { GlobalCacheService } from '@lovenotes/core/modules/storage';
import { TagService } from '@lovenotes/core/modules/tag';
import { WorkbenchService } from '@lovenotes/core/modules/workbench';
import { WorkspaceService } from '@lovenotes/core/modules/workspace';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useServices } from '@lovenotes/infra';
import { track } from '@lovenotes/track';
import { useCallback, useMemo } from 'react';

import { TagRenameSubMenu } from './dialog';

export const useNavigationPanelTagNodeOperations = (
  tagId: string,
  {
    openNodeCollapsed,
  }: {
    openNodeCollapsed: () => void;
  }
) => {
  const t = useI18n();
  const {
    workbenchService,
    workspaceService,
    tagService,
    favoriteService,
    workspaceDialogService,
    globalCacheService,
  } = useServices({
    WorkbenchService,
    WorkspaceService,
    TagService,
    DocsService,
    FavoriteService,
    WorkspaceDialogService,
    GlobalCacheService,
  });
  const { openConfirmModal } = useConfirmModal();

  const favorite = useLiveData(
    favoriteService.favoriteList.favorite$('tag', tagId)
  );
  const tagRecord = useLiveData(tagService.tagList.tagByTagId$(tagId));

  const { createPage } = usePageHelper(
    workspaceService.workspace.docCollection
  );

  const handleNewDoc = useCallback(() => {
    if (tagRecord) {
      const newDoc = createPage();
      tagRecord?.tag(newDoc.id);
      track.$.navigationPanel.tags.createDoc();
      openNodeCollapsed();
    }
  }, [createPage, openNodeCollapsed, tagRecord]);

  const handleMoveToTrash = useCallback(() => {
    tagService.tagList.deleteTag(tagId);
    track.$.navigationPanel.organize.deleteOrganizeItem({ type: 'tag' });
    toast(t['com.lovenotes.tags.delete-tags.toast']());
  }, [t, tagId, tagService.tagList]);

  const handleOpenInSplitView = useCallback(() => {
    workbenchService.workbench.openTag(tagId, {
      at: 'beside',
    });
    track.$.navigationPanel.organize.openInSplitView({ type: 'tag' });
  }, [tagId, workbenchService]);

  const handleToggleFavoriteTag = useCallback(() => {
    favoriteService.favoriteList.toggle('tag', tagId);
    track.$.navigationPanel.organize.toggleFavorite({
      type: 'tag',
    });
  }, [favoriteService, tagId]);

  const handleOpenInNewTab = useCallback(() => {
    workbenchService.workbench.openTag(tagId, {
      at: 'new-tab',
    });
    track.$.navigationPanel.organize.openInNewTab({ type: 'tag' });
  }, [tagId, workbenchService]);

  const handleRename = useCallback(
    (newName: string) => {
      if (tagRecord && tagRecord.value$.value !== newName) {
        tagRecord.rename(newName);
        track.$.navigationPanel.organize.renameOrganizeItem({
          type: 'tag',
        });
      }
    },
    [tagRecord]
  );
  const handleChangeColor = useCallback(
    (color: string) => {
      if (tagRecord && tagRecord.color$.value !== color) {
        tagRecord.changeColor(color);
      }
    },
    [tagRecord]
  );
  const handleChangeNameOrColor = useCallback(
    (name?: string, color?: string) => {
      if (name !== undefined) {
        handleRename(name);
      }
      if (color !== undefined) {
        handleChangeColor(color);
      }
    },
    [handleChangeColor, handleRename]
  );
  const handleOpenDocSelector = useCallback(() => {
    const initialIds = tagRecord?.pageIds$.value;
    workspaceDialogService.open(
      'doc-selector',
      {
        init: initialIds ?? [],
        onBeforeConfirm(ids, cb) {
          const hasRemoved = initialIds?.some(id => !ids?.includes(id));
          if (
            hasRemoved &&
            globalCacheService.globalCache.get(
              'mobile:tags:will-be-removed-warning-read'
            ) !== true
          ) {
            openConfirmModal({
              title: t['com.lovenotes.m.selector.remove-warning.title'](),
              description: t['com.lovenotes.m.selector.remove-warning.message'](
                {
                  type: t['com.lovenotes.m.selector.type-doc'](),
                  where: t['com.lovenotes.m.selector.where-tag'](),
                }
              ),
              cancelText: t['com.lovenotes.m.selector.remove-warning.cancel'](),
              confirmText:
                t['com.lovenotes.m.selector.remove-warning.confirm'](),
              reverseFooter: true,
              onConfirm: () => {
                globalCacheService.globalCache.set(
                  'mobile:tags:will-be-removed-warning-read',
                  true
                );
                cb();
              },
            });
          } else {
            cb();
          }
        },
      },
      selectedIds => {
        if (selectedIds === undefined) {
          return;
        }
        const newIds = selectedIds.filter(id => !initialIds?.includes(id));
        const removedIds = initialIds?.filter(id => !selectedIds.includes(id));
        newIds.forEach(id => tagRecord?.tag(id));
        removedIds?.forEach(id => tagRecord?.untag(id));
      }
    );
  }, [
    tagRecord,
    workspaceDialogService,
    globalCacheService.globalCache,
    openConfirmModal,
    t,
  ]);

  return useMemo(
    () => ({
      favorite,
      handleNewDoc,
      handleMoveToTrash,
      handleOpenInSplitView,
      handleToggleFavoriteTag,
      handleOpenInNewTab,
      handleRename,
      handleChangeColor,
      handleChangeNameOrColor,
      handleOpenDocSelector,
    }),
    [
      favorite,
      handleChangeColor,
      handleChangeNameOrColor,
      handleMoveToTrash,
      handleNewDoc,
      handleOpenInNewTab,
      handleOpenInSplitView,
      handleRename,
      handleToggleFavoriteTag,
      handleOpenDocSelector,
    ]
  );
};
export const useNavigationPanelTagNodeOperationsMenu = (
  tagId: string,
  option: {
    openNodeCollapsed: () => void;
  }
): NodeOperation[] => {
  const t = useI18n();
  const {
    favorite,
    handleNewDoc,
    handleMoveToTrash,
    handleOpenInSplitView,
    handleToggleFavoriteTag,
    handleChangeNameOrColor,
    handleOpenDocSelector,
  } = useNavigationPanelTagNodeOperations(tagId, option);

  return useMemo(
    () => [
      {
        index: 0,
        inline: true,
        view: (
          <IconButton size="16" onClick={handleNewDoc}>
            <PlusIcon />
          </IconButton>
        ),
      },
      {
        index: 10,
        view: (
          <TagRenameSubMenu
            onConfirm={handleChangeNameOrColor}
            tagId={tagId}
            menuProps={{ triggerOptions: { 'data-testid': 'rename-tag' } }}
          />
        ),
      },
      {
        index: 11,
        view: <MenuSeparator />,
      },
      {
        index: 12,
        view: (
          <MenuItem prefixIcon={<FolderIcon />} onClick={handleOpenDocSelector}>
            {t['com.lovenotes.m.explorer.tag.manage-docs']()}
          </MenuItem>
        ),
      },
      ...(BUILD_CONFIG.isElectron
        ? [
            {
              index: 100,
              view: (
                <MenuItem
                  prefixIcon={<SplitViewIcon />}
                  onClick={handleOpenInSplitView}
                >
                  {t['com.lovenotes.workbench.split-view.page-menu-open']()}
                </MenuItem>
              ),
            },
          ]
        : []),
      {
        index: 199,
        view: (
          <MenuItem
            prefixIcon={<IsFavoriteIcon favorite={!!favorite} />}
            onClick={handleToggleFavoriteTag}
          >
            {favorite
              ? t['com.lovenotes.favoritePageOperation.remove']()
              : t['com.lovenotes.favoritePageOperation.add']()}
          </MenuItem>
        ),
      },
      {
        index: 9999,
        view: <MenuSeparator key="menu-separator" />,
      },
      {
        index: 10000,
        view: (
          <MenuItem
            type={'danger'}
            prefixIcon={<DeleteIcon />}
            onClick={handleMoveToTrash}
          >
            {t['Delete']()}
          </MenuItem>
        ),
      },
    ],
    [
      favorite,
      handleChangeNameOrColor,
      handleMoveToTrash,
      handleNewDoc,
      handleOpenDocSelector,
      handleOpenInSplitView,
      handleToggleFavoriteTag,
      t,
      tagId,
    ]
  );
};
