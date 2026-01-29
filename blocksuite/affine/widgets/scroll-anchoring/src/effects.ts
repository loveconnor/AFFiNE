import {
  AFFINE_SCROLL_ANCHORING_WIDGET,
  LoveNotesScrollAnchoringWidget,
} from './scroll-anchoring.js';

export function effects() {
  customElements.define(
    AFFINE_SCROLL_ANCHORING_WIDGET,
    LoveNotesScrollAnchoringWidget
  );
}

declare global {
  interface HTMLElementTagNameMap {
    [AFFINE_SCROLL_ANCHORING_WIDGET]: LoveNotesScrollAnchoringWidget;
  }
}
