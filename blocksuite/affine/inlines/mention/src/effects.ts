import { LoveNotesMention } from './lovenotes-mention';

export function effects() {
  customElements.define('lovenotes-mention', LoveNotesMention);
}

declare global {
  interface HTMLElementTagNameMap {
    'lovenotes-mention': LoveNotesMention;
  }
}
