import {
  type DropTargetDropEvent,
  type DropTargetOptions,
  useDropTarget,
} from '@lovenotes/component';
import type { LoveNotesDNDData } from '@lovenotes/core/types/dnd';
import { useI18n } from '@lovenotes/i18n';

import { EmptyNodeChildren } from '../../layouts/empty-node-children';
import { draggedOverHighlight } from './empty.css';

export const FolderEmpty = ({
  canDrop,
  onDrop,
}: {
  onDrop?: (data: DropTargetDropEvent<LoveNotesDNDData>) => void;
  canDrop?: DropTargetOptions<LoveNotesDNDData>['canDrop'];
}) => {
  const { dropTargetRef } = useDropTarget(
    () => ({
      onDrop,
      canDrop,
    }),
    [onDrop, canDrop]
  );

  const t = useI18n();
  return (
    <EmptyNodeChildren ref={dropTargetRef} className={draggedOverHighlight}>
      {t['com.lovenotes.rootAppSidebar.organize.empty-folder']()}
    </EmptyNodeChildren>
  );
};
