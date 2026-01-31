import { DeleteIcon } from '@blocksuite/icons/rc';
import { Button } from '@lovenotes/component';
import { SettingRow } from '@lovenotes/component/setting-components';
import { DesktopApiService } from '@lovenotes/core/modules/desktop-api';
import { ThemeEditorService } from '@lovenotes/core/modules/theme-editor';
import { UrlService } from '@lovenotes/core/modules/url';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService, useServiceOptional } from '@lovenotes/infra';
import { cssVar } from '@toeverything/theme';
import { useCallback } from 'react';

export const ThemeEditorSetting = () => {
  const themeEditor = useService(ThemeEditorService);
  const modified = useLiveData(themeEditor.modified$);
  const urlService = useService(UrlService);
  const desktopApi = useServiceOptional(DesktopApiService);

  const open = useCallback(() => {
    if (desktopApi) {
      desktopApi?.handler.ui.openThemeEditor().catch(console.error);
    } else if (BUILD_CONFIG.isMobileWeb || BUILD_CONFIG.isWeb) {
      urlService.openPopupWindow(location.origin + '/theme-editor');
    }
  }, [desktopApi, urlService]);

  const t = useI18n();

  return (
    <SettingRow
      name={t['com.lovenotes.appearanceSettings.customize-theme.title']()}
      desc={t['com.lovenotes.appearanceSettings.customize-theme.description']()}
    >
      <div style={{ display: 'flex', gap: 16 }}>
        {modified ? (
          <Button
            style={{
              color: cssVar('errorColor'),
              borderColor: cssVar('errorColor'),
            }}
            prefixStyle={{
              color: cssVar('errorColor'),
            }}
            onClick={() => themeEditor.reset()}
            variant="secondary"
            prefix={<DeleteIcon />}
          >
            {t['com.lovenotes.appearanceSettings.customize-theme.reset']()}
          </Button>
        ) : null}
        <Button onClick={open}>
          {t['com.lovenotes.appearanceSettings.customize-theme.open']()}
        </Button>
      </div>
    </SettingRow>
  );
};
