import {
  PreconditionStrategy,
  registerLoveNotesCommand,
} from '@lovenotes/core/commands';
import { FindInPageService } from '@lovenotes/core/modules/find-in-page/services/find-in-page';
import { useServiceOptional } from '@lovenotes/infra';
import { track } from '@lovenotes/track';
import { useCallback, useEffect } from 'react';

export function useRegisterFindInPageCommands() {
  const findInPage = useServiceOptional(FindInPageService)?.findInPage;
  const showFindInPage = useCallback(() => {
    // get the selected text in page
    const selection = window.getSelection();
    const selectedText = selection?.toString();

    findInPage?.findInPage(selectedText);
  }, [findInPage]);

  useEffect(() => {
    if (!BUILD_CONFIG.isElectron) {
      return;
    }
    const unsubs: Array<() => void> = [];
    unsubs.push(
      registerLoveNotesCommand({
        preconditionStrategy: PreconditionStrategy.Never,
        id: `lovenotes:find-in-page`,
        keyBinding: {
          binding: '$mod+f',
        },
        icon: null,
        label: '',
        run() {
          track.$.cmdk.general.findInPage();
          showFindInPage();
        },
      })
    );

    return () => {
      unsubs.forEach(unsub => unsub());
    };
  }, [findInPage, showFindInPage]);
}
