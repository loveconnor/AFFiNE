import { LoveNotesLink } from './link-node/lovenotes-link';
import { LinkPopup } from './link-node/link-popup/link-popup';

export function effects() {
  customElements.define('link-popup', LinkPopup);
  customElements.define('lovenotes-link', LoveNotesLink);
}
