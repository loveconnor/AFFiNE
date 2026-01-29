import { FlexWrapper } from '@lovenotes/component';
import { ExplorerDisplayMenuButton } from '@lovenotes/core/components/explorer/display-menu';
import { ViewToggle } from '@lovenotes/core/components/explorer/display-menu/view-toggle';
import { ExplorerNavigation } from '@lovenotes/core/components/explorer/header/navigation';
import type { ExplorerDisplayPreference } from '@lovenotes/core/components/explorer/types';
import { Header } from '@lovenotes/core/components/pure/header';

export const CollectionDetailHeader = ({
  displayPreference,
  onDisplayPreferenceChange,
}: {
  displayPreference: ExplorerDisplayPreference;
  onDisplayPreferenceChange: (
    displayPreference: ExplorerDisplayPreference
  ) => void;
}) => {
  return (
    <Header
      right={
        <FlexWrapper gap={16}>
          <ViewToggle
            view={displayPreference.view ?? 'list'}
            onViewChange={view => {
              onDisplayPreferenceChange({ ...displayPreference, view });
            }}
          />
          <ExplorerDisplayMenuButton
            displayPreference={displayPreference}
            onDisplayPreferenceChange={onDisplayPreferenceChange}
          />
        </FlexWrapper>
      }
      left={<ExplorerNavigation active="collections" />}
    />
  );
};
