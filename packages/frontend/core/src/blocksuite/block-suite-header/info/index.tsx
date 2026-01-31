import { InformationIcon } from '@blocksuite/icons/rc';
import { IconButton } from '@lovenotes/component';
import { WorkspaceDialogService } from '@lovenotes/core/modules/dialogs';
import { useI18n } from '@lovenotes/i18n';
import { useService } from '@lovenotes/infra';
import { track } from '@lovenotes/track';
import { useCallback } from 'react';

export const InfoButton = ({ docId }: { docId: string }) => {
  const workspaceDialogService = useService(WorkspaceDialogService);
  const t = useI18n();

  const onOpenInfoModal = useCallback(() => {
    track.$.header.actions.openDocInfo();
    workspaceDialogService.open('doc-info', { docId });
  }, [docId, workspaceDialogService]);

  return (
    <IconButton
      size="20"
      tooltip={t['com.lovenotes.page-properties.page-info.view']()}
      data-testid="header-info-button"
      onClick={onOpenInfoModal}
    >
      <InformationIcon />
    </IconButton>
  );
};
