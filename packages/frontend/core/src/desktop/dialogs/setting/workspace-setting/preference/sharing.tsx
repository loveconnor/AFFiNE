import { Switch } from '@lovenotes/component';
import {
  SettingRow,
  SettingWrapper,
} from '@lovenotes/component/setting-components';
import { useAsyncCallback } from '@lovenotes/core/components/hooks/lovenotes-async-hooks';
import { WorkspacePermissionService } from '@lovenotes/core/modules/permissions';
import { WorkspaceShareSettingService } from '@lovenotes/core/modules/share-setting';
import { WorkspaceService } from '@lovenotes/core/modules/workspace';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@toeverything/infra';

export const SharingPanel = () => {
  const workspace = useService(WorkspaceService).workspace;
  if (workspace.flavour === 'local') {
    return null;
  }
  return <Sharing />;
};

export const Sharing = () => {
  const t = useI18n();
  const shareSetting = useService(WorkspaceShareSettingService).sharePreview;
  const enableSharing = useLiveData(shareSetting.enableSharing$);
  const enableUrlPreview = useLiveData(shareSetting.enableUrlPreview$);
  const loading = useLiveData(shareSetting.isLoading$);
  const permissionService = useService(WorkspacePermissionService);
  const isOwner = useLiveData(permissionService.permission.isOwner$);

  const handleToggleSharing = useAsyncCallback(
    async (checked: boolean) => {
      await shareSetting.setEnableSharing(checked);
    },
    [shareSetting]
  );

  const handleCheck = useAsyncCallback(
    async (checked: boolean) => {
      await shareSetting.setEnableUrlPreview(checked);
    },
    [shareSetting]
  );

  if (!isOwner) {
    return null;
  }

  return (
    <SettingWrapper title={t['com.lovenotes.settings.workspace.sharing.title']()}>
      <SettingRow
        name={t['com.lovenotes.settings.workspace.sharing.url-preview.title']()}
        desc={t[
          'com.lovenotes.settings.workspace.sharing.url-preview.description'
        ]()}
      >
        <Switch
          checked={enableUrlPreview || false}
          onChange={handleCheck}
          disabled={loading}
        />
      </SettingRow>
      <SettingRow
        name={t[
          'com.lovenotes.settings.workspace.sharing.workspace-sharing.title'
        ]()}
        desc={t[
          'com.lovenotes.settings.workspace.sharing.workspace-sharing.description'
        ]()}
      >
        <Switch
          checked={enableSharing ?? true}
          onChange={handleToggleSharing}
          disabled={loading}
        />
      </SettingRow>
    </SettingWrapper>
  );
};
