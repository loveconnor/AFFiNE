import { useConfirmModal } from '@lovenotes/component';
import { useAsyncCallback } from '@lovenotes/core/components/hooks/lovenotes-async-hooks';
import { MeetingSettingsService } from '@lovenotes/core/modules/media/services/meeting-settings';
import { useI18n } from '@lovenotes/i18n';
import { useService } from '@lovenotes/infra';
import track from '@lovenotes/track';

export const useEnableRecording = () => {
  const meetingSettingsService = useService(MeetingSettingsService);
  const confirmModal = useConfirmModal();
  const t = useI18n();

  const handleEnabledChange = useAsyncCallback(
    async (checked: boolean) => {
      try {
        track.$.settingsPanel.meetings.toggleMeetingFeatureFlag({
          option: checked ? 'on' : 'off',
          type: 'Meeting record',
        });
        await meetingSettingsService.setEnabled(checked);
      } catch {
        confirmModal.openConfirmModal({
          title:
            t[
              'com.lovenotes.settings.meetings.record.permission-modal.title'
            ](),
          description:
            t[
              'com.lovenotes.settings.meetings.record.permission-modal.description'
            ](),
          onConfirm: async () => {
            await meetingSettingsService.showRecordingPermissionSetting(
              'screen'
            );
          },
          cancelText: t['com.lovenotes.recording.dismiss'](),
          confirmButtonOptions: {
            variant: 'primary',
          },
          confirmText:
            t[
              'com.lovenotes.settings.meetings.record.permission-modal.open-setting'
            ](),
        });
      }
    },
    [confirmModal, meetingSettingsService, t]
  );

  return handleEnabledChange;
};
