import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';

import { InlineAdapterExtensions } from './adapters/extensions';

export class InlinePresetStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-inline-preset';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(InlineAdapterExtensions);
  }
}
