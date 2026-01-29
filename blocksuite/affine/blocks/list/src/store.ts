import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { ListBlockSchemaExtension } from '@blocksuite/lovenotes-model';

import { ListBlockAdapterExtensions } from './adapters/extension';

export class ListStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-list-block';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(ListBlockSchemaExtension);
    context.register(ListBlockAdapterExtensions);
  }
}
