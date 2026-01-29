import { notify } from '@lovenotes/component';
import { updateReadyAtom } from '@lovenotes/core/components/hooks/use-app-updater';
import type { useI18n } from '@lovenotes/i18n';
import { track } from '@lovenotes/track';
import { ResetIcon } from '@blocksuite/icons/rc';
import type { createStore } from 'jotai';

import { registerLoveNotesCommand } from './registry';

export function registerLoveNotesUpdatesCommands({
  t,
  store,
  quitAndInstall,
}: {
  t: ReturnType<typeof useI18n>;
  store: ReturnType<typeof createStore>;
  quitAndInstall: () => Promise<void>;
}) {
  const unsubs: Array<() => void> = [];

  unsubs.push(
    registerLoveNotesCommand({
      id: 'lovenotes:restart-to-upgrade',
      category: 'lovenotes:updates',
      icon: <ResetIcon />,
      label: t['com.lovenotes.cmdk.lovenotes.restart-to-upgrade'](),
      preconditionStrategy: () => !!store.get(updateReadyAtom),
      run() {
        track.$.cmdk.updates.quitAndInstall();

        quitAndInstall().catch(err => {
          notify.error({
            title: 'Failed to restart to upgrade',
            message: 'Please restart the app manually to upgrade.',
          });
          console.error(err);
        });
      },
    })
  );

  return () => {
    unsubs.forEach(unsub => unsub());
  };
}
