import { AFFINE_LINKED_DOC_WIDGET } from './config.js';
import { ImportDoc } from './import-doc/import-doc.js';
import { Loader } from './import-doc/loader.js';
import { LoveNotesLinkedDocWidget } from './index.js';
import { LinkedDocPopover } from './linked-doc-popover.js';
import { LoveNotesMobileLinkedDocMenu } from './mobile-linked-doc-menu.js';

export function effects() {
  customElements.define('lovenotes-linked-doc-popover', LinkedDocPopover);
  customElements.define(AFFINE_LINKED_DOC_WIDGET, LoveNotesLinkedDocWidget);
  customElements.define('import-doc', ImportDoc);
  customElements.define(
    'lovenotes-mobile-linked-doc-menu',
    LoveNotesMobileLinkedDocMenu
  );
  customElements.define('loader-element', Loader);
}
