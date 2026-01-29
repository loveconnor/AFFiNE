import type { I18n } from '@lovenotes/core/modules/i18n';
import type { useI18n } from '@lovenotes/i18n';
import { track } from '@lovenotes/track';
import { SettingsIcon } from '@blocksuite/icons/rc';

import { registerLoveNotesCommand } from './registry';

export function registerLoveNotesLanguageCommands({
  i18n,
  t,
}: {
  i18n: I18n;
  t: ReturnType<typeof useI18n>;
}) {
  // Display Language
  const disposables = i18n.languageList.map(language => {
    return registerLoveNotesCommand({
      id: `lovenotes:change-display-language-to-${language.name}`,
      label: `${t['com.lovenotes.cmdk.lovenotes.display-language.to']()} ${
        language.originalName
      }`,
      category: 'lovenotes:settings',
      icon: <SettingsIcon />,
      preconditionStrategy: () =>
        i18n.currentLanguage$.value.key !== language.key,
      run() {
        track.$.cmdk.settings.changeAppSetting({
          key: 'language',
          value: language.name,
        });

        i18n.changeLanguage(language.key);
      },
    });
  });

  return () => {
    disposables.forEach(dispose => dispose());
  };
}
