import type { SetStateAction } from 'jotai';
import { atom, useAtom } from 'jotai';

import type { LoveNotesEditorContainer } from '../../blocksuite/block-suite-editor';

const activeEditorContainerAtom = atom<LoveNotesEditorContainer | null>(null);

export function useActiveBlocksuiteEditor(): [
  LoveNotesEditorContainer | null,
  React.Dispatch<SetStateAction<LoveNotesEditorContainer | null>>,
] {
  const [editorContainer, setEditorContainer] = useAtom(
    activeEditorContainerAtom
  );

  return [editorContainer, setEditorContainer];
}
