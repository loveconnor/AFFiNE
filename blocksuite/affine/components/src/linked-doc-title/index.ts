import { DocTitle } from './doc-title';

export * from './doc-title';

export function effects() {
  customElements.define('lovenotes-linked-doc-title', DocTitle);
}
