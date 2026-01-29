import { ImageBlockFallbackCard } from './components/image-block-fallback.js';
import { ImageBlockPageComponent } from './components/page-image-block.js';
import { ImageBlockComponent } from './image-block.js';
import { ImageEdgelessBlockComponent } from './image-edgeless-block.js';
import { ImageEdgelessPlaceholderBlockComponent } from './preview-image/edgeless.js';
import { ImagePlaceholderBlockComponent } from './preview-image/page.js';

export function effects() {
  customElements.define('lovenotes-image', ImageBlockComponent);
  customElements.define('lovenotes-edgeless-image', ImageEdgelessBlockComponent);
  customElements.define('lovenotes-page-image', ImageBlockPageComponent);
  customElements.define('lovenotes-image-fallback-card', ImageBlockFallbackCard);
  customElements.define(
    'lovenotes-placeholder-preview-image',
    ImagePlaceholderBlockComponent
  );
  customElements.define(
    'lovenotes-edgeless-placeholder-preview-image',
    ImageEdgelessPlaceholderBlockComponent
  );
}
