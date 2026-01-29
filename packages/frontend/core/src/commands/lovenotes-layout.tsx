import type { useI18n } from '@lovenotes/i18n';
import { track } from '@lovenotes/track';
import { SidebarIcon } from '@blocksuite/icons/rc';

import type { AppSidebarService } from '../modules/app-sidebar';
import { registerLoveNotesCommand } from './registry';

export function registerLoveNotesLayoutCommands({
  t,
  appSidebarService,
}: {
  t: ReturnType<typeof useI18n>;
  appSidebarService: AppSidebarService;
}) {
  const unsubs: Array<() => void> = [];
  unsubs.push(
    registerLoveNotesCommand({
      id: 'lovenotes:toggle-left-sidebar',
      category: 'lovenotes:layout',
      icon: <SidebarIcon />,
      label: () =>
        appSidebarService.sidebar.open$.value
          ? t['com.lovenotes.cmdk.lovenotes.left-sidebar.collapse']()
          : t['com.lovenotes.cmdk.lovenotes.left-sidebar.expand'](),

      keyBinding: {
        binding: '$mod+/',
      },
      run() {
        track.$.navigationPanel.$.toggle({
          type: appSidebarService.sidebar.open$.value ? 'collapse' : 'expand',
        });
        appSidebarService.sidebar.toggleSidebar();
      },
    })
  );

  return () => {
    unsubs.forEach(unsub => unsub());
  };
}
