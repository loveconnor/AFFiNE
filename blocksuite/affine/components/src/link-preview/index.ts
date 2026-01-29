import { LinkPreview } from './link';

export * from './link';

export function effects() {
  customElements.define('lovenotes-link-preview', LinkPreview);
}
