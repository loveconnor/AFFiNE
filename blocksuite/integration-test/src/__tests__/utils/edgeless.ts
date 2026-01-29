import type {
  EdgelessRootBlockComponent,
  PageRootBlockComponent,
} from '@blocksuite/lovenotes/blocks/root';
import type { SurfaceBlockComponent } from '@blocksuite/lovenotes/blocks/surface';
import type { Store } from '@blocksuite/store';

import type { TestLoveNotesEditorContainer } from '../../index.js';

export function getSurface(doc: Store, editor: TestLoveNotesEditorContainer) {
  const surfaceModel = doc.getModelsByFlavour('lovenotes:surface');

  return editor.host!.view.getBlock(
    surfaceModel[0]!.id
  ) as SurfaceBlockComponent;
}

export function getDocRootBlock(
  doc: Store,
  editor: TestLoveNotesEditorContainer,
  mode: 'page'
): PageRootBlockComponent;
export function getDocRootBlock(
  doc: Store,
  editor: TestLoveNotesEditorContainer,
  mode: 'edgeless'
): EdgelessRootBlockComponent;
export function getDocRootBlock(
  doc: Store,
  editor: TestLoveNotesEditorContainer,
  _?: 'edgeless' | 'page'
) {
  return editor.host!.view.getBlock(doc.root!.id) as
    | EdgelessRootBlockComponent
    | PageRootBlockComponent;
}

export function addNote(doc: Store, props: Record<string, any> = {}) {
  const noteId = doc.addBlock(
    'lovenotes:note',
    {
      xywh: '[0, 0, 800, 100]',
      ...props,
    },
    doc.root
  );

  doc.addBlock('lovenotes:paragraph', {}, noteId);

  return noteId;
}
