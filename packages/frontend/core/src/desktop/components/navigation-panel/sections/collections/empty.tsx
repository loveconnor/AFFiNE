import { useI18n } from '@lovenotes/i18n';
import { ViewLayersIcon } from '@blocksuite/icons/rc';

import { NavigationPanelEmptySection } from '../../layouts/empty-section';

export const RootEmpty = ({
  onClickCreate,
}: {
  onClickCreate?: () => void;
}) => {
  const t = useI18n();

  return (
    <NavigationPanelEmptySection
      icon={ViewLayersIcon}
      message={t['com.lovenotes.collections.empty.message']()}
      messageTestId="slider-bar-collection-empty-message"
      actionText={t['com.lovenotes.collections.empty.new-collection-button']()}
      onActionClick={onClickCreate}
    />
  );
};
