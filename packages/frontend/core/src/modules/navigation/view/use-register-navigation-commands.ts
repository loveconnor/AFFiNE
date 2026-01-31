import {
  PreconditionStrategy,
  registerLoveNotesCommand,
} from '@lovenotes/core/commands';
import { useService } from '@lovenotes/infra';
import { track } from '@lovenotes/track';
import { useEffect } from 'react';

import { NavigatorService } from '../services/navigator';

export function useRegisterNavigationCommands() {
  const navigator = useService(NavigatorService).navigator;
  useEffect(() => {
    const unsubs: Array<() => void> = [];

    unsubs.push(
      registerLoveNotesCommand({
        id: 'lovenotes:shortcut-history-go-back',
        category: 'lovenotes:general',
        preconditionStrategy: PreconditionStrategy.Never,
        icon: 'none',
        label: 'go back',
        keyBinding: {
          binding: '$mod+[',
        },
        run() {
          track.$.cmdk.general.goBack();

          navigator.back();
        },
      })
    );
    unsubs.push(
      registerLoveNotesCommand({
        id: 'lovenotes:shortcut-history-go-forward',
        category: 'lovenotes:general',
        preconditionStrategy: PreconditionStrategy.Never,
        icon: 'none',
        label: 'go forward',
        keyBinding: {
          binding: '$mod+]',
        },
        run() {
          track.$.cmdk.general.goForward();

          navigator.forward();
        },
      })
    );

    return () => {
      unsubs.forEach(unsub => unsub());
    };
  }, [navigator]);
}
