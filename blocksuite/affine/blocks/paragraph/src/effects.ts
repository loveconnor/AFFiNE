import { effects as ParagraphHeadingIconEffects } from './heading-icon.js';
import { ParagraphBlockComponent } from './paragraph-block.js';

export function effects() {
  ParagraphHeadingIconEffects();
  customElements.define('lovenotes-paragraph', ParagraphBlockComponent);
}

declare global {
  interface HTMLElementTagNameMap {
    'lovenotes-paragraph': ParagraphBlockComponent;
  }
}
