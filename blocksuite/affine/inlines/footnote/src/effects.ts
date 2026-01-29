import { LoveNotesFootnoteNode } from './footnote-node/footnote-node';
import { FootNotePopup } from './footnote-node/footnote-popup';
import { FootNotePopupChip } from './footnote-node/footnote-popup-chip';

export function effects() {
  customElements.define('lovenotes-footnote-node', LoveNotesFootnoteNode);
  customElements.define('footnote-popup', FootNotePopup);
  customElements.define('footnote-popup-chip', FootNotePopupChip);
}

declare global {
  interface HTMLElementTagNameMap {
    'lovenotes-footnote-node': LoveNotesFootnoteNode;
    'footnote-popup': FootNotePopup;
    'footnote-popup-chip': FootNotePopupChip;
  }
}
