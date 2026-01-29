import { AFFINE_TOOLBAR_WIDGET, LoveNotesToolbarWidget } from './toolbar';

export function effects() {
  customElements.define(AFFINE_TOOLBAR_WIDGET, LoveNotesToolbarWidget);
}

declare global {
  interface HTMLElementTagNameMap {
    [AFFINE_TOOLBAR_WIDGET]: LoveNotesToolbarWidget;
  }
}
