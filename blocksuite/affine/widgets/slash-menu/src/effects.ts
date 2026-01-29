import { AFFINE_SLASH_MENU_WIDGET } from './consts';
import { InnerSlashMenu, SlashMenu } from './slash-menu-popover';
import { LoveNotesSlashMenuWidget } from './widget';

export function effects() {
  customElements.define(AFFINE_SLASH_MENU_WIDGET, LoveNotesSlashMenuWidget);
  customElements.define('lovenotes-slash-menu', SlashMenu);
  customElements.define('inner-slash-menu', InnerSlashMenu);
}

declare global {
  interface HTMLElementTagNameMap {
    [AFFINE_SLASH_MENU_WIDGET]: LoveNotesSlashMenuWidget;
  }
}
