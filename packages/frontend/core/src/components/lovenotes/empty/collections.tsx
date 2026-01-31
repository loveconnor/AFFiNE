import { ViewLayersIcon } from '@blocksuite/icons/rc';
import { usePromptModal } from '@lovenotes/component';
import { useNavigateHelper } from '@lovenotes/core/components/hooks/use-navigate-helper';
import { CollectionService } from '@lovenotes/core/modules/collection';
import { WorkspaceService } from '@lovenotes/core/modules/workspace';
import { useI18n } from '@lovenotes/i18n';
import { useService } from '@lovenotes/infra';
import { useCallback } from 'react';

import { ActionButton } from './action-button';
import collectionListDark from './assets/collection-list.dark.png';
import collectionListLight from './assets/collection-list.light.png';
import { EmptyLayout } from './layout';
import type { UniversalEmptyProps } from './types';

export const EmptyCollections = (props: UniversalEmptyProps) => {
  const t = useI18n();
  const collectionService = useService(CollectionService);
  const currentWorkspace = useService(WorkspaceService).workspace;

  const navigateHelper = useNavigateHelper();
  const { openPromptModal } = usePromptModal();

  const showAction = true;

  const handleCreateCollection = useCallback(() => {
    openPromptModal({
      title: t['com.lovenotes.editCollection.saveCollection'](),
      label: t['com.lovenotes.editCollectionName.name'](),
      inputOptions: {
        placeholder: t['com.lovenotes.editCollectionName.name.placeholder'](),
      },
      children: t['com.lovenotes.editCollectionName.createTips'](),
      confirmText: t['com.lovenotes.editCollection.save'](),
      cancelText: t['com.lovenotes.editCollection.button.cancel'](),
      confirmButtonOptions: {
        variant: 'primary',
      },
      onConfirm(name) {
        const id = collectionService.createCollection({ name });
        navigateHelper.jumpToCollection(currentWorkspace.id, id);
      },
    });
  }, [
    collectionService,
    currentWorkspace.id,
    navigateHelper,
    openPromptModal,
    t,
  ]);

  return (
    <EmptyLayout
      illustrationLight={collectionListLight}
      illustrationDark={collectionListDark}
      title={t['com.lovenotes.empty.collections.title']()}
      description={t['com.lovenotes.empty.collections.description']()}
      action={
        showAction ? (
          <ActionButton
            prefix={<ViewLayersIcon />}
            onClick={handleCreateCollection}
          >
            {t['com.lovenotes.empty.collections.action.new-collection']()}
          </ActionButton>
        ) : null
      }
      {...props}
    />
  );
};
