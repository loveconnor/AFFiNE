import {
  EdgelessRootBlockComponent,
  EdgelessRootPreviewBlockComponent,
  PageRootBlockComponent,
  PreviewRootBlockComponent,
} from './index.js';

export function effects() {
  // Register components by category
  registerRootComponents();
}

function registerRootComponents() {
  customElements.define('lovenotes-page-root', PageRootBlockComponent);
  customElements.define('lovenotes-preview-root', PreviewRootBlockComponent);
  customElements.define('lovenotes-edgeless-root', EdgelessRootBlockComponent);
  customElements.define(
    'lovenotes-edgeless-root-preview',
    EdgelessRootPreviewBlockComponent
  );
}

declare global {
  interface HTMLElementTagNameMap {
    'lovenotes-edgeless-root': EdgelessRootBlockComponent;
    'lovenotes-page-root': PageRootBlockComponent;
  }
}
