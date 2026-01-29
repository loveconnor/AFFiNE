import { ListBlockComponent } from './list-block.js';

export function effects() {
  customElements.define('lovenotes-list', ListBlockComponent);
}

declare global {
  interface HTMLElementTagNameMap {
    'lovenotes-list': ListBlockComponent;
  }
}
