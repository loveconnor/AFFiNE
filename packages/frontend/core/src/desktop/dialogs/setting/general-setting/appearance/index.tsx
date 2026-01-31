import type { RadioItem } from '@lovenotes/component';
import { RadioGroup, Switch } from '@lovenotes/component';
import {
  SettingHeader,
  SettingRow,
  SettingWrapper,
} from '@lovenotes/component/setting-components';
import { LanguageMenu } from '@lovenotes/core/components/lovenotes/language-menu';
import { TraySettingService } from '@lovenotes/core/modules/editor-setting/services/tray-settings';
import { FeatureFlagService } from '@lovenotes/core/modules/feature-flag';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@lovenotes/infra';
import { useTheme } from 'next-themes';
import { useCallback, useMemo } from 'react';

import { useAppSettingHelper } from '../../../../../components/hooks/lovenotes/use-app-setting-helper';
import { OpenInAppLinksMenu } from './links';
import { settingWrapper } from './style.css';
import { ThemeEditorSetting } from './theme-editor-setting';

export const getThemeOptions = (t: ReturnType<typeof useI18n>) =>
  [
    {
      value: 'system',
      label: t['com.lovenotes.themeSettings.system'](),
      testId: 'system-theme-trigger',
    },
    {
      value: 'light',
      label: t['com.lovenotes.themeSettings.light'](),
      testId: 'light-theme-trigger',
    },
    {
      value: 'dark',
      label: t['com.lovenotes.themeSettings.dark'](),
      testId: 'dark-theme-trigger',
    },
  ] satisfies RadioItem[];

export const ThemeSettings = () => {
  const t = useI18n();
  const { setTheme, theme } = useTheme();

  const radioItems = useMemo<RadioItem[]>(() => getThemeOptions(t), [t]);

  return (
    <RadioGroup
      items={radioItems}
      value={theme}
      width={250}
      className={settingWrapper}
      onChange={useCallback(
        (value: string) => {
          setTheme(value);
        },
        [setTheme]
      )}
    />
  );
};

const MenubarSetting = () => {
  const t = useI18n();
  const traySettingService = useService(TraySettingService);
  const traySetting = useLiveData(traySettingService.settings$);

  return (
    <>
      <SettingWrapper
        id="menubar"
        title={t['com.lovenotes.appearanceSettings.menubar.title']()}
      >
        <SettingRow
          name={t['com.lovenotes.appearanceSettings.menubar.toggle']()}
          desc={t['com.lovenotes.appearanceSettings.menubar.description']()}
        >
          <Switch
            checked={traySetting.enabled}
            onChange={checked => traySettingService.setEnabled(checked)}
          />
        </SettingRow>
      </SettingWrapper>
      {traySetting.enabled && !environment.isMacOs ? (
        <SettingWrapper
          id="windowBehavior"
          title={t[
            'com.lovenotes.appearanceSettings.menubar.windowBehavior.title'
          ]()}
        >
          <SettingRow
            name={t[
              'com.lovenotes.appearanceSettings.menubar.windowBehavior.openOnLeftClick.toggle'
            ]()}
            desc={t[
              'com.lovenotes.appearanceSettings.menubar.windowBehavior.openOnLeftClick.description'
            ]()}
          >
            <Switch
              checked={traySetting.openOnLeftClick}
              onChange={checked =>
                traySettingService.setOpenOnLeftClick(checked)
              }
            />
          </SettingRow>
          <SettingRow
            name={t[
              'com.lovenotes.appearanceSettings.menubar.windowBehavior.minimizeToTray.toggle'
            ]()}
            desc={t[
              'com.lovenotes.appearanceSettings.menubar.windowBehavior.minimizeToTray.description'
            ]()}
          >
            <Switch
              checked={traySetting.minimizeToTray}
              onChange={checked =>
                traySettingService.setMinimizeToTray(checked)
              }
            />
          </SettingRow>
          <SettingRow
            name={t[
              'com.lovenotes.appearanceSettings.menubar.windowBehavior.closeToTray.toggle'
            ]()}
            desc={t[
              'com.lovenotes.appearanceSettings.menubar.windowBehavior.closeToTray.description'
            ]()}
          >
            <Switch
              checked={traySetting.closeToTray}
              onChange={checked => traySettingService.setCloseToTray(checked)}
            />
          </SettingRow>
          <SettingRow
            name={t[
              'com.lovenotes.appearanceSettings.menubar.windowBehavior.startMinimized.toggle'
            ]()}
            desc={t[
              'com.lovenotes.appearanceSettings.menubar.windowBehavior.startMinimized.description'
            ]()}
          >
            <Switch
              checked={traySetting.startMinimized}
              onChange={checked =>
                traySettingService.setStartMinimized(checked)
              }
            />
          </SettingRow>
        </SettingWrapper>
      ) : null}
    </>
  );
};

export const AppearanceSettings = () => {
  const t = useI18n();

  const featureFlagService = useService(FeatureFlagService);
  const enableThemeEditor = useLiveData(
    featureFlagService.flags.enable_theme_editor.$
  );
  const { appSettings, updateSettings } = useAppSettingHelper();

  return (
    <>
      <SettingHeader
        title={t['com.lovenotes.appearanceSettings.title']()}
        subtitle={t['com.lovenotes.appearanceSettings.subtitle']()}
      />

      <SettingWrapper
        title={t['com.lovenotes.appearanceSettings.theme.title']()}
      >
        <SettingRow
          name={t['com.lovenotes.appearanceSettings.color.title']()}
          desc={t['com.lovenotes.appearanceSettings.color.description']()}
        >
          <ThemeSettings />
        </SettingRow>
        <SettingRow
          name={t['com.lovenotes.appearanceSettings.language.title']()}
          desc={t['com.lovenotes.appearanceSettings.language.description']()}
        >
          <div className={settingWrapper}>
            <LanguageMenu />
          </div>
        </SettingRow>
        {BUILD_CONFIG.isElectron ? (
          <SettingRow
            name={t['com.lovenotes.appearanceSettings.clientBorder.title']()}
            desc={t[
              'com.lovenotes.appearanceSettings.clientBorder.description'
            ]()}
            data-testid="client-border-style-trigger"
          >
            <Switch
              checked={appSettings.clientBorder}
              onChange={checked => updateSettings('clientBorder', checked)}
            />
          </SettingRow>
        ) : null}
        {enableThemeEditor ? <ThemeEditorSetting /> : null}
      </SettingWrapper>

      <SettingWrapper
        title={t['com.lovenotes.appearanceSettings.images.title']()}
      >
        <SettingRow
          name={t[
            'com.lovenotes.appearanceSettings.images.antialiasing.title'
          ]()}
          desc={t[
            'com.lovenotes.appearanceSettings.images.antialiasing.description'
          ]()}
          data-testid="image-antialiasing-trigger"
        >
          <Switch
            checked={!appSettings.disableImageAntialiasing}
            onChange={checked =>
              updateSettings('disableImageAntialiasing', !checked)
            }
          />
        </SettingRow>
      </SettingWrapper>

      {BUILD_CONFIG.isWeb && !environment.isMobile ? (
        <SettingWrapper title={t['com.lovenotes.setting.appearance.links']()}>
          <SettingRow
            name={t['com.lovenotes.setting.appearance.open-in-app']()}
            desc={t['com.lovenotes.setting.appearance.open-in-app.hint']()}
            data-testid="open-in-app-links-trigger"
          >
            <OpenInAppLinksMenu />
          </SettingRow>
        </SettingWrapper>
      ) : null}

      <SettingWrapper
        title={t['com.lovenotes.appearanceSettings.sidebar.title']()}
      >
        {BUILD_CONFIG.isElectron ? (
          <SettingRow
            name={t['com.lovenotes.appearanceSettings.noisyBackground.title']()}
            desc={t[
              'com.lovenotes.appearanceSettings.noisyBackground.description'
            ]()}
          >
            <Switch
              checked={appSettings.enableNoisyBackground}
              onChange={checked =>
                updateSettings('enableNoisyBackground', checked)
              }
            />
          </SettingRow>
        ) : null}
        {BUILD_CONFIG.isElectron && environment.isMacOs && (
          <SettingRow
            name={t['com.lovenotes.appearanceSettings.translucentUI.title']()}
            desc={t[
              'com.lovenotes.appearanceSettings.translucentUI.description'
            ]()}
          >
            <Switch
              checked={appSettings.enableBlurBackground}
              onChange={checked =>
                updateSettings('enableBlurBackground', checked)
              }
            />
          </SettingRow>
        )}
        <SettingRow
          name={t[
            'com.lovenotes.appearanceSettings.showLinkedDocInSidebar.title'
          ]()}
          desc={t[
            'com.lovenotes.appearanceSettings.showLinkedDocInSidebar.description'
          ]()}
        >
          <Switch
            checked={!!appSettings.showLinkedDocInSidebar}
            onChange={checked =>
              updateSettings('showLinkedDocInSidebar', checked)
            }
          />
        </SettingRow>
      </SettingWrapper>

      {BUILD_CONFIG.isElectron ? <MenubarSetting /> : null}
    </>
  );
};
