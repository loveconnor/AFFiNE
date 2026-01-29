import {
  PreconditionStrategy,
  registerLoveNotesCommand,
} from '@lovenotes/core/commands';
import { useSharingUrl } from '@lovenotes/core/components/hooks/lovenotes/use-share-url';
import { useIsActiveView } from '@lovenotes/core/modules/workbench';
import type { WorkspaceMetadata } from '@lovenotes/core/modules/workspace';
import { track } from '@lovenotes/track';
import { useEffect } from 'react';

export function useRegisterCopyLinkCommands({
  workspaceMeta,
  docId,
}: {
  workspaceMeta: WorkspaceMetadata;
  docId: string;
}) {
  const isActiveView = useIsActiveView();
  const workspaceId = workspaceMeta.id;
  const isCloud = workspaceMeta.flavour !== 'local';

  const { onClickCopyLink } = useSharingUrl({
    workspaceId,
    pageId: docId,
  });

  useEffect(() => {
    if (!isActiveView) {
      return;
    }
    const unsubs: Array<() => void> = [];

    unsubs.push(
      registerLoveNotesCommand({
        id: `lovenotes:share-private-link:${docId}`,
        category: 'lovenotes:general',
        preconditionStrategy: PreconditionStrategy.Never,
        keyBinding: {
          binding: '$mod+Shift+c',
        },
        label: '',
        icon: null,
        run() {
          track.$.cmdk.general.copyShareLink();
          isActiveView && isCloud && onClickCopyLink();
        },
      })
    );
    return () => {
      unsubs.forEach(unsub => unsub());
    };
  }, [docId, isActiveView, isCloud, onClickCopyLink]);
}
