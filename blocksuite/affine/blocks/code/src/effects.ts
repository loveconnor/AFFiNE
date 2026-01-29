import { CodeBlockComponent } from './code-block';
import {
  AFFINE_CODE_TOOLBAR_WIDGET,
  LoveNotesCodeToolbarWidget,
} from './code-toolbar';
import { LoveNotesCodeToolbar } from './code-toolbar/components/code-toolbar';
import { LanguageListButton } from './code-toolbar/components/lang-button';
import { PreviewButton } from './code-toolbar/components/preview-button';
import { LoveNotesCodeUnit } from './highlight/lovenotes-code-unit';

export function effects() {
  customElements.define('language-list-button', LanguageListButton);
  customElements.define('lovenotes-code-toolbar', LoveNotesCodeToolbar);
  customElements.define(AFFINE_CODE_TOOLBAR_WIDGET, LoveNotesCodeToolbarWidget);
  customElements.define('lovenotes-code-unit', LoveNotesCodeUnit);
  customElements.define('lovenotes-code', CodeBlockComponent);
  customElements.define('preview-button', PreviewButton);
}

declare global {
  interface HTMLElementTagNameMap {
    'language-list-button': LanguageListButton;
    'lovenotes-code-toolbar': LoveNotesCodeToolbar;
    'preview-button': PreviewButton;
    [AFFINE_CODE_TOOLBAR_WIDGET]: LoveNotesCodeToolbarWidget;
  }
}
