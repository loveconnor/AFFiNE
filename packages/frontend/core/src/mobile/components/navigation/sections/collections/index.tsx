import { AddCollectionIcon } from '@blocksuite/icons/rc';
import { usePromptModal } from '@lovenotes/component';
import { NavigationPanelTreeRoot } from '@lovenotes/core/desktop/components/navigation-panel';
import { CollectionService } from '@lovenotes/core/modules/collection';
import { NavigationPanelService } from '@lovenotes/core/modules/navigation-panel';
import { WorkbenchService } from '@lovenotes/core/modules/workbench';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useServices } from '@lovenotes/infra';
import { track } from '@lovenotes/track';
import { useCallback, useMemo } from 'react';

import { AddItemPlaceholder } from '../../layouts/add-item-placeholder';
import { CollapsibleSection } from '../../layouts/collapsible-section';
import { NavigationPanelCollectionNode } from '../../nodes/collection';
import * as styles from './index.css';

export const NavigationPanelCollections = () => {
  const t = useI18n();
  const { collectionService, workbenchService, navigationPanelService } =
    useServices({
      CollectionService,
      WorkbenchService,
      NavigationPanelService,
    });
  const path = useMemo(() => ['collections'], []);
  const collectionMetas = useLiveData(collectionService.collectionMetas$);
  const { openPromptModal } = usePromptModal();

  const handleCreateCollection = useCallback(() => {
    openPromptModal({
      title: t['com.lovenotes.editCollection.saveCollection'](),
      label: t['com.lovenotes.editCollectionName.name'](),
      inputOptions: {
        placeholder: t['com.lovenotes.editCollectionName.name.placeholder'](),
      },
      children: (
        <div className={styles.createTips}>
          {t['com.lovenotes.editCollectionName.createTips']()}
        </div>
      ),
      confirmText: t['com.lovenotes.editCollection.save'](),
      cancelText: t['com.lovenotes.editCollection.button.cancel'](),
      confirmButtonOptions: {
        variant: 'primary',
      },
      onConfirm(name) {
        const id = collectionService.createCollection({ name });
        track.$.navigationPanel.organize.createOrganizeItem({
          type: 'collection',
        });
        workbenchService.workbench.openCollection(id);
        navigationPanelService.setCollapsed(path, false);
      },
    });
  }, [
    collectionService,
    navigationPanelService,
    path,
    openPromptModal,
    t,
    workbenchService.workbench,
  ]);

  return (
    <CollapsibleSection
      path={path}
      testId="navigation-panel-collections"
      title={t['com.lovenotes.rootAppSidebar.collections']()}
    >
      <NavigationPanelTreeRoot>
        {collectionMetas.map(collection => (
          <NavigationPanelCollectionNode
            key={collection.id}
            collectionId={collection.id}
            parentPath={path}
          />
        ))}
        <AddItemPlaceholder
          icon={<AddCollectionIcon />}
          data-testid="navigation-panel-bar-add-collection-button"
          label={t['com.lovenotes.rootAppSidebar.collection.new']()}
          onClick={() => handleCreateCollection()}
        />
      </NavigationPanelTreeRoot>
    </CollapsibleSection>
  );
};
