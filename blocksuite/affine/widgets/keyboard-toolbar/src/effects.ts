import {
  AFFINE_KEYBOARD_TOOLBAR_WIDGET,
  LoveNotesKeyboardToolbarWidget,
} from './index.js';
import {
  AFFINE_KEYBOARD_TOOL_PANEL,
  LoveNotesKeyboardToolPanel,
} from './keyboard-tool-panel.js';
import {
  AFFINE_KEYBOARD_TOOLBAR,
  LoveNotesKeyboardToolbar,
} from './keyboard-toolbar.js';

export function effects() {
  customElements.define(
    AFFINE_KEYBOARD_TOOLBAR_WIDGET,
    LoveNotesKeyboardToolbarWidget
  );
  customElements.define(AFFINE_KEYBOARD_TOOLBAR, LoveNotesKeyboardToolbar);
  customElements.define(AFFINE_KEYBOARD_TOOL_PANEL, LoveNotesKeyboardToolPanel);
}

declare global {
  interface HTMLElementTagNameMap {
    [AFFINE_KEYBOARD_TOOLBAR]: LoveNotesKeyboardToolbar;
    [AFFINE_KEYBOARD_TOOL_PANEL]: LoveNotesKeyboardToolPanel;
  }
}
