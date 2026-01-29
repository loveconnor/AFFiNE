import { type DropTargetDropEvent, useDropTarget } from '@lovenotes/component';
import type { LoveNotesDNDData } from '@lovenotes/core/types/dnd';
import { useI18n } from '@lovenotes/i18n';

import { EmptyNodeChildren } from '../../layouts/empty-node-children';

export const Empty = ({
  onDrop,
}: {
  onDrop: (data: DropTargetDropEvent<LoveNotesDNDData>) => void;
}) => {
  const { dropTargetRef } = useDropTarget(
    () => ({
      onDrop,
    }),
    [onDrop]
  );
  const t = useI18n();
  return (
    <EmptyNodeChildren ref={dropTargetRef}>
      {t['com.lovenotes.rootAppSidebar.tags.no-doc']()}
    </EmptyNodeChildren>
  );
};
