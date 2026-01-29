import { useEnableCloud } from '@lovenotes/core/components/hooks/lovenotes/use-enable-cloud';
import { WorkspaceShareSettingService } from '@lovenotes/core/modules/share-setting';
import type { Workspace } from '@lovenotes/core/modules/workspace';
import { useI18n } from '@lovenotes/i18n';
import { track } from '@lovenotes/track';
import type { Store } from '@blocksuite/lovenotes/store';
import { useLiveData, useService } from '@toeverything/infra';
import { useCallback, useEffect } from 'react';

import { ShareMenu } from './share-menu';
export { CloudSvg } from './cloud-svg';
export { ShareMenuContent } from './share-menu';

type SharePageModalProps = {
  workspace: Workspace;
  page: Store;
};

export const SharePageButton = ({ workspace, page }: SharePageModalProps) => {
  const t = useI18n();
  const shareSetting = useService(WorkspaceShareSettingService).sharePreview;
  const enableSharing = useLiveData(shareSetting.enableSharing$);

  const confirmEnableCloud = useEnableCloud();
  const handleOpenShareModal = useCallback((open: boolean) => {
    if (open) {
      track.$.sharePanel.$.open();
    }
  }, []);

  useEffect(() => {
    if (workspace.meta.flavour === 'local') {
      return;
    }
    shareSetting.revalidate();
  }, [shareSetting, workspace.meta.flavour]);

  const sharingDisabled = enableSharing === false;
  const disabledReason = sharingDisabled
    ? t['com.lovenotes.share-menu.workspace-sharing.disabled.tooltip']()
    : undefined;

  return (
    <ShareMenu
      workspaceMetadata={workspace.meta}
      currentPage={page}
      onEnableLoveNotesCloud={() =>
        confirmEnableCloud(workspace, {
          openPageId: page.id,
        })
      }
      onOpenShareModal={handleOpenShareModal}
      disabled={sharingDisabled}
      disabledReason={disabledReason}
    />
  );
};
