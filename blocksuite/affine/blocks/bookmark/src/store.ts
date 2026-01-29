import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { BookmarkBlockSchemaExtension } from '@blocksuite/lovenotes-model';

import { BookmarkBlockAdapterExtensions } from './adapters/extension';

export class BookmarkStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-bookmark-block';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(BookmarkBlockSchemaExtension);
    context.register(BookmarkBlockAdapterExtensions);
  }
}
