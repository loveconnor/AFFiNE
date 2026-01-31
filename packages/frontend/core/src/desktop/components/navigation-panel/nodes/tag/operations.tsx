import {
  DeleteIcon,
  OpenInNewIcon,
  PlusIcon,
  SplitViewIcon,
} from '@blocksuite/icons/rc';
import {
  IconButton,
  MenuItem,
  MenuSeparator,
  toast,
} from '@lovenotes/component';
import { usePageHelper } from '@lovenotes/core/blocksuite/block-suite-page-list/utils';
import { IsFavoriteIcon } from '@lovenotes/core/components/pure/icons';
import { DocsService } from '@lovenotes/core/modules/doc';
import { FavoriteService } from '@lovenotes/core/modules/favorite';
import { TagService } from '@lovenotes/core/modules/tag';
import { WorkbenchService } from '@lovenotes/core/modules/workbench';
import { WorkspaceService } from '@lovenotes/core/modules/workspace';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useServices } from '@lovenotes/infra';
import { track } from '@lovenotes/track';
import { useCallback, useMemo } from 'react';

import type { NodeOperation } from '../../tree/types';

export const useNavigationPanelTagNodeOperations = (
  tagId: string,
  {
    openNodeCollapsed,
  }: {
    openNodeCollapsed: () => void;
  }
): NodeOperation[] => {
  const t = useI18n();
  const { workbenchService, workspaceService, tagService, favoriteService } =
    useServices({
      WorkbenchService,
      WorkspaceService,
      TagService,
      DocsService,
      FavoriteService,
    });

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

  return useMemo(
    () => [
      {
        index: 0,
        inline: true,
        view: (
          <IconButton
            size="16"
            onClick={handleNewDoc}
            data-testid="tag-add-doc-button"
            tooltip={t[
              'com.lovenotes.rootAppSidebar.explorer.tag-add-tooltip'
            ]()}
          >
            <PlusIcon />
          </IconButton>
        ),
      },
      {
        index: 50,
        view: (
          <MenuItem prefixIcon={<OpenInNewIcon />} onClick={handleOpenInNewTab}>
            {t['com.lovenotes.workbench.tab.page-menu-open']()}
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
            data-testid="tag-delete-button"
          >
            {t['Delete']()}
          </MenuItem>
        ),
      },
    ],
    [
      favorite,
      handleMoveToTrash,
      handleNewDoc,
      handleOpenInNewTab,
      handleOpenInSplitView,
      handleToggleFavoriteTag,
      t,
    ]
  );
};
