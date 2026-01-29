import { Tooltip } from './tooltip.js';

export function effects() {
  if (!customElements.get('lovenotes-tooltip')) {
    customElements.define('lovenotes-tooltip', Tooltip);
  }
}
