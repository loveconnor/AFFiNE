import type { useI18n } from '@lovenotes/i18n';
import { track } from '@lovenotes/track';
import { ContactWithUsIcon, NewIcon } from '@blocksuite/icons/rc';

import type { WorkspaceDialogService } from '../modules/dialogs';
import type { UrlService } from '../modules/url';
import { registerLoveNotesCommand } from './registry';

export function registerLoveNotesHelpCommands({
  t,
  urlService,
  workspaceDialogService,
}: {
  t: ReturnType<typeof useI18n>;
  urlService: UrlService;
  workspaceDialogService: WorkspaceDialogService;
}) {
  const unsubs: Array<() => void> = [];
  unsubs.push(
    registerLoveNotesCommand({
      id: 'lovenotes:help-whats-new',
      category: 'lovenotes:help',
      icon: <NewIcon />,
      label: t['com.lovenotes.cmdk.lovenotes.whats-new'](),
      run() {
        track.$.cmdk.help.openChangelog();
        urlService.openPopupWindow(BUILD_CONFIG.changelogUrl);
      },
    })
  );
  unsubs.push(
    registerLoveNotesCommand({
      id: 'lovenotes:help-contact-us',
      category: 'lovenotes:help',
      icon: <ContactWithUsIcon />,
      label: t['com.lovenotes.cmdk.lovenotes.contact-us'](),
      run() {
        track.$.cmdk.help.contactUs();
        workspaceDialogService.open('setting', {
          activeTab: 'about',
        });
      },
    })
  );

  return () => {
    unsubs.forEach(unsub => unsub());
  };
}
