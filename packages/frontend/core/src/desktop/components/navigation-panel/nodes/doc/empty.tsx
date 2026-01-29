import { type DropTargetDropEvent, useDropTarget } from '@lovenotes/component';
import type { LoveNotesDNDData } from '@lovenotes/core/types/dnd';
import { useI18n } from '@lovenotes/i18n';

import { EmptyNodeChildren } from '../../layouts/empty-node-children';

export const Empty = ({
  onDrop,
  noAccessible = false,
}: {
  onDrop: (data: DropTargetDropEvent<LoveNotesDNDData>) => void;
  noAccessible?: boolean;
}) => {
  const { dropTargetRef } = useDropTarget<LoveNotesDNDData>(
    () => ({
      onDrop,
    }),
    [onDrop]
  );
  const t = useI18n();

  return (
    <EmptyNodeChildren ref={dropTargetRef}>
      {noAccessible
        ? t['com.lovenotes.share-menu.option.permission.no-access']()
        : t['com.lovenotes.rootAppSidebar.docs.no-subdoc']()}
    </EmptyNodeChildren>
  );
};
