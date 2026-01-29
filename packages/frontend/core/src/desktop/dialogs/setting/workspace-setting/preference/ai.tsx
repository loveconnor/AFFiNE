import { Switch } from '@lovenotes/component';
import {
  SettingRow,
  SettingWrapper,
} from '@lovenotes/component/setting-components';
import { useAsyncCallback } from '@lovenotes/core/components/hooks/lovenotes-async-hooks';
import { ServerService } from '@lovenotes/core/modules/cloud';
import { WorkspacePermissionService } from '@lovenotes/core/modules/permissions';
import { WorkspaceShareSettingService } from '@lovenotes/core/modules/share-setting';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@toeverything/infra';

export const AiSetting = () => {
  const t = useI18n();
  const shareSetting = useService(WorkspaceShareSettingService).sharePreview;
  const serverService = useService(ServerService);
  const serverEnableAi = useLiveData(
    serverService.server.features$.map(f => f?.copilot)
  );
  const workspaceEnableAi = useLiveData(shareSetting.enableAi$);
  const loading = useLiveData(shareSetting.isLoading$);
  const permissionService = useService(WorkspacePermissionService);
  const isOwner = useLiveData(permissionService.permission.isOwner$);

  const toggleAi = useAsyncCallback(
    async (checked: boolean) => {
      await shareSetting.setEnableAi(checked);
    },
    [shareSetting]
  );

  if (!isOwner || !serverEnableAi) {
    return null;
  }

  return (
    <SettingWrapper
      title={t['com.lovenotes.settings.workspace.lovenotes-ai.title']()}
    >
      <SettingRow
        name={t['com.lovenotes.settings.workspace.lovenotes-ai.label']()}
        desc={t['com.lovenotes.settings.workspace.lovenotes-ai.description']()}
      >
        <Switch
          checked={!!workspaceEnableAi}
          onChange={toggleAi}
          disabled={loading}
        />
      </SettingRow>
    </SettingWrapper>
  );
};
