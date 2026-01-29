import { REFERENCE_NODE } from '@blocksuite/lovenotes-shared/consts';
import type { LoveNotesInlineEditor } from '@blocksuite/lovenotes-shared/types';

export function insertLinkedNode({
  inlineEditor,
  docId,
}: {
  inlineEditor: LoveNotesInlineEditor;
  docId: string;
}) {
  if (!inlineEditor) return;
  const inlineRange = inlineEditor.getInlineRange();
  if (!inlineRange) return;
  inlineEditor.insertText(inlineRange, REFERENCE_NODE, {
    reference: { type: 'LinkedPage', pageId: docId },
  });
  inlineEditor.setInlineRange({
    index: inlineRange.index + 1,
    length: 0,
  });
}
