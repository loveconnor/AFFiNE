import type { useI18n } from '@lovenotes/i18n';
import { track } from '@lovenotes/track';
import type { DocMode } from '@blocksuite/lovenotes/model';
import { ImportIcon, PlusIcon } from '@blocksuite/icons/rc';

import type { usePageHelper } from '../blocksuite/block-suite-page-list/utils';
import type { GlobalDialogService } from '../modules/dialogs';
import { registerLoveNotesCommand } from './registry';

export function registerLoveNotesCreationCommands({
  pageHelper,
  t,
  globalDialogService,
}: {
  t: ReturnType<typeof useI18n>;
  pageHelper: ReturnType<typeof usePageHelper>;
  globalDialogService: GlobalDialogService;
}) {
  const unsubs: Array<() => void> = [];
  unsubs.push(
    registerLoveNotesCommand({
      id: 'lovenotes:new-page',
      category: 'lovenotes:creation',
      label: t['com.lovenotes.cmdk.lovenotes.new-page'](),
      icon: <PlusIcon />,
      keyBinding: BUILD_CONFIG.isElectron
        ? {
            binding: '$mod+N',
            skipRegister: true,
          }
        : undefined,
      run() {
        track.$.cmdk.creation.createDoc({ mode: 'page' });

        pageHelper.createPage('page' as DocMode);
      },
    })
  );

  unsubs.push(
    registerLoveNotesCommand({
      id: 'lovenotes:new-edgeless-page',
      category: 'lovenotes:creation',
      icon: <PlusIcon />,
      label: t['com.lovenotes.cmdk.lovenotes.new-edgeless-page'](),
      run() {
        track.$.cmdk.creation.createDoc({
          mode: 'edgeless',
        });

        pageHelper.createEdgeless();
      },
    })
  );

  unsubs.push(
    registerLoveNotesCommand({
      id: 'lovenotes:new-workspace',
      category: 'lovenotes:creation',
      icon: <PlusIcon />,
      label: t['com.lovenotes.cmdk.lovenotes.new-workspace'](),
      run() {
        track.$.cmdk.workspace.createWorkspace();

        globalDialogService.open('create-workspace', {});
      },
    })
  );
  unsubs.push(
    registerLoveNotesCommand({
      id: 'lovenotes:import-workspace',
      category: 'lovenotes:creation',
      icon: <ImportIcon />,
      label: t['com.lovenotes.cmdk.lovenotes.import-workspace'](),
      preconditionStrategy: () => {
        return BUILD_CONFIG.isElectron;
      },
      run() {
        track.$.cmdk.workspace.createWorkspace({
          control: 'import',
        });

        globalDialogService.open('import-workspace', undefined);
      },
    })
  );

  return () => {
    unsubs.forEach(unsub => unsub());
  };
}
