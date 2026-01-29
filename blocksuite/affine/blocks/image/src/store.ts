import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { ImageBlockSchemaExtension } from '@blocksuite/lovenotes-model';
import { ImageSelectionExtension } from '@blocksuite/lovenotes-shared/selection';

import { ImageBlockAdapterExtensions } from './adapters/extension';

export class ImageStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-image-block';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register([ImageBlockSchemaExtension, ImageSelectionExtension]);
    context.register(ImageBlockAdapterExtensions);
  }
}
