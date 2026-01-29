import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { DividerBlockSchemaExtension } from '@blocksuite/lovenotes-model';

import { DividerBlockAdapterExtensions } from './adapters/extension';

export class DividerStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-divider-block';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(DividerBlockSchemaExtension);
    context.register(DividerBlockAdapterExtensions);
  }
}
