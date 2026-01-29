import { Button } from '@lovenotes/component';
import {
  SettingRow,
  SettingWrapper,
} from '@lovenotes/component/setting-components';
import { useI18n } from '@lovenotes/i18n';

export const Preferences = () => {
  const t = useI18n();
  return (
    <SettingWrapper
      title={t['com.lovenotes.settings.editorSettings.preferences']()}
    >
      <SettingRow
        name={t[
          'com.lovenotes.settings.editorSettings.preferences.export.title'
        ]()}
        desc={t[
          'com.lovenotes.settings.editorSettings.preferences.export.description'
        ]()}
      >
        <Button>Export</Button>
      </SettingRow>
      <SettingRow
        name={t[
          'com.lovenotes.settings.editorSettings.preferences.import.title'
        ]()}
        desc={t[
          'com.lovenotes.settings.editorSettings.preferences.import.description'
        ]()}
      >
        <Button>Import</Button>
      </SettingRow>
    </SettingWrapper>
  );
};
