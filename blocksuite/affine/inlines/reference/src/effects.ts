import { LoveNotesReference, ReferencePopup } from './reference-node';

export function effects() {
  customElements.define('reference-popup', ReferencePopup);
  customElements.define('lovenotes-reference', LoveNotesReference);
}

declare global {
  interface HTMLElementTagNameMap {
    'lovenotes-reference': LoveNotesReference;
    'reference-popup': ReferencePopup;
  }
}
