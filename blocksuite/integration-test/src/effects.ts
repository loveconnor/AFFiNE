import '@blocksuite/lovenotes/effects';

import { TestLoveNotesEditorContainer } from './editors/index.js';

export function effects() {
  customElements.define('lovenotes-editor-container', TestLoveNotesEditorContainer);
}
