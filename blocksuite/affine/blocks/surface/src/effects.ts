import { SurfaceBlockComponent } from './surface-block.js';
import { SurfaceBlockVoidComponent } from './surface-block-void.js';

export function effects() {
  customElements.define('lovenotes-surface-void', SurfaceBlockVoidComponent);
  customElements.define('lovenotes-surface', SurfaceBlockComponent);
}
