import { LoveNotesText } from './nodes/lovenotes-text';

export function effects() {
  customElements.define('lovenotes-text', LoveNotesText);
}

declare global {
  interface HTMLElementTagNameMap {
    'lovenotes-text': LoveNotesText;
  }
}
