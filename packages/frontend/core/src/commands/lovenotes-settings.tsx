import { SettingsIcon } from '@blocksuite/icons/rc';
import type { useI18n } from '@lovenotes/i18n';
import { appSettingAtom } from '@lovenotes/infra';
import { track } from '@lovenotes/track';
import type { createStore } from 'jotai';
import type { useTheme } from 'next-themes';

import type { EditorSettingService } from '../modules/editor-setting';
import { registerLoveNotesCommand } from './registry';

export function registerLoveNotesSettingsCommands({
  t,
  store,
  theme,
  editorSettingService,
}: {
  t: ReturnType<typeof useI18n>;
  store: ReturnType<typeof createStore>;
  theme: ReturnType<typeof useTheme>;
  editorSettingService: EditorSettingService;
}) {
  const unsubs: Array<() => void> = [];
  const updateSettings = editorSettingService.editorSetting.set.bind(
    editorSettingService.editorSetting
  );
  const settings$ = editorSettingService.editorSetting.settings$;

  // color modes
  unsubs.push(
    registerLoveNotesCommand({
      id: 'lovenotes:change-color-mode-to-auto',
      label: `${t['com.lovenotes.cmdk.lovenotes.color-mode.to']()} ${t[
        'com.lovenotes.themeSettings.system'
      ]()}`,
      category: 'lovenotes:settings',
      icon: <SettingsIcon />,
      preconditionStrategy: () => theme.theme !== 'system',
      run() {
        track.$.cmdk.settings.changeAppSetting({
          key: 'theme',
          value: 'system',
        });
        theme.setTheme('system');
      },
    })
  );
  unsubs.push(
    registerLoveNotesCommand({
      id: 'lovenotes:change-color-mode-to-dark',
      label: `${t['com.lovenotes.cmdk.lovenotes.color-mode.to']()} ${t[
        'com.lovenotes.themeSettings.dark'
      ]()}`,
      category: 'lovenotes:settings',
      icon: <SettingsIcon />,
      preconditionStrategy: () => theme.theme !== 'dark',
      run() {
        track.$.cmdk.settings.changeAppSetting({
          key: 'theme',
          value: 'dark',
        });
        theme.setTheme('dark');
      },
    })
  );

  unsubs.push(
    registerLoveNotesCommand({
      id: 'lovenotes:change-color-mode-to-light',
      label: `${t['com.lovenotes.cmdk.lovenotes.color-mode.to']()} ${t[
        'com.lovenotes.themeSettings.light'
      ]()}`,
      category: 'lovenotes:settings',
      icon: <SettingsIcon />,
      preconditionStrategy: () => theme.theme !== 'light',
      run() {
        track.$.cmdk.settings.changeAppSetting({
          key: 'theme',
          value: 'light',
        });

        theme.setTheme('light');
      },
    })
  );

  // Font styles
  unsubs.push(
    registerLoveNotesCommand({
      id: 'lovenotes:change-font-style-to-sans',
      label: `${t['com.lovenotes.cmdk.lovenotes.font-style.to']()} ${t[
        'com.lovenotes.appearanceSettings.fontStyle.sans'
      ]()}`,
      category: 'lovenotes:settings',
      icon: <SettingsIcon />,
      preconditionStrategy: () => settings$.value.fontFamily !== 'Sans',
      run() {
        track.$.cmdk.settings.changeAppSetting({
          key: 'fontStyle',
          value: 'Sans',
        });

        updateSettings('fontFamily', 'Sans');
      },
    })
  );

  unsubs.push(
    registerLoveNotesCommand({
      id: 'lovenotes:change-font-style-to-serif',
      label: `${t['com.lovenotes.cmdk.lovenotes.font-style.to']()} ${t[
        'com.lovenotes.appearanceSettings.fontStyle.serif'
      ]()}`,
      category: 'lovenotes:settings',
      icon: <SettingsIcon />,
      preconditionStrategy: () => settings$.value.fontFamily !== 'Serif',
      run() {
        track.$.cmdk.settings.changeAppSetting({
          key: 'fontStyle',
          value: 'Serif',
        });

        updateSettings('fontFamily', 'Serif');
      },
    })
  );

  unsubs.push(
    registerLoveNotesCommand({
      id: 'lovenotes:change-font-style-to-mono',
      label: `${t['com.lovenotes.cmdk.lovenotes.font-style.to']()} ${t[
        'com.lovenotes.appearanceSettings.fontStyle.mono'
      ]()}`,
      category: 'lovenotes:settings',
      icon: <SettingsIcon />,
      preconditionStrategy: () => settings$.value.fontFamily !== 'Mono',
      run() {
        track.$.cmdk.settings.changeAppSetting({
          key: 'fontStyle',
          value: 'Mono',
        });

        updateSettings('fontFamily', 'Mono');
      },
    })
  );

  // Layout Style
  unsubs.push(
    registerLoveNotesCommand({
      id: `lovenotes:change-client-border-style`,
      label:
        () => `${t['com.lovenotes.cmdk.lovenotes.client-border-style.to']()} ${t[
          store.get(appSettingAtom).clientBorder
            ? 'com.lovenotes.cmdk.lovenotes.switch-state.off'
            : 'com.lovenotes.cmdk.lovenotes.switch-state.on'
        ]()}
        `,
      category: 'lovenotes:settings',
      icon: <SettingsIcon />,
      preconditionStrategy: () => BUILD_CONFIG.isElectron,
      run() {
        track.$.cmdk.settings.changeAppSetting({
          key: 'clientBorder',
          value: store.get(appSettingAtom).clientBorder ? 'off' : 'on',
        });
        store.set(appSettingAtom, prev => ({
          ...prev,
          clientBorder: !prev.clientBorder,
        }));
      },
    })
  );

  unsubs.push(
    registerLoveNotesCommand({
      id: `lovenotes:change-full-width-layout`,
      label: () =>
        `${t[
          settings$.value.fullWidthLayout
            ? 'com.lovenotes.cmdk.lovenotes.default-page-width-layout.standard'
            : 'com.lovenotes.cmdk.lovenotes.default-page-width-layout.full-width'
        ]()}`,
      category: 'lovenotes:settings',
      icon: <SettingsIcon />,
      run() {
        track.$.cmdk.settings.changeAppSetting({
          key: 'fullWidthLayout',
          value: settings$.value.fullWidthLayout ? 'off' : 'on',
        });
        updateSettings('fullWidthLayout', !settings$.value.fullWidthLayout);
      },
    })
  );

  unsubs.push(
    registerLoveNotesCommand({
      id: `lovenotes:change-noise-background-on-the-sidebar`,
      label: () =>
        `${t[
          'com.lovenotes.cmdk.lovenotes.noise-background-on-the-sidebar.to'
        ]()} ${t[
          store.get(appSettingAtom).enableNoisyBackground
            ? 'com.lovenotes.cmdk.lovenotes.switch-state.off'
            : 'com.lovenotes.cmdk.lovenotes.switch-state.on'
        ]()}`,
      category: 'lovenotes:settings',
      icon: <SettingsIcon />,
      preconditionStrategy: () => BUILD_CONFIG.isElectron,
      run() {
        track.$.cmdk.settings.changeAppSetting({
          key: 'enableNoisyBackground',
          value: store.get(appSettingAtom).enableNoisyBackground ? 'off' : 'on',
        });

        store.set(appSettingAtom, prev => ({
          ...prev,
          enableNoisyBackground: !prev.enableNoisyBackground,
        }));
      },
    })
  );

  unsubs.push(
    registerLoveNotesCommand({
      id: `lovenotes:change-translucent-ui-on-the-sidebar`,
      label: () =>
        `${t['com.lovenotes.cmdk.lovenotes.translucent-ui-on-the-sidebar.to']()} ${t[
          store.get(appSettingAtom).enableBlurBackground
            ? 'com.lovenotes.cmdk.lovenotes.switch-state.off'
            : 'com.lovenotes.cmdk.lovenotes.switch-state.on'
        ]()}`,
      category: 'lovenotes:settings',
      icon: <SettingsIcon />,
      preconditionStrategy: () =>
        BUILD_CONFIG.isElectron && environment.isMacOs,
      run() {
        track.$.cmdk.settings.changeAppSetting({
          key: 'enableBlurBackground',
          value: store.get(appSettingAtom).enableBlurBackground ? 'off' : 'on',
        });
        store.set(appSettingAtom, prev => ({
          ...prev,
          enableBlurBackground: !prev.enableBlurBackground,
        }));
      },
    })
  );

  return () => {
    unsubs.forEach(unsub => unsub());
  };
}
