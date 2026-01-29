import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { TableBlockSchemaExtension } from '@blocksuite/lovenotes-model';

import { TableBlockAdapterExtensions } from './adapters/extension';
import { TableSelectionExtension } from './selection-schema';

export class TableStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-table-block';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(TableBlockSchemaExtension);
    context.register(TableBlockAdapterExtensions);
    context.register(TableSelectionExtension);
  }
}
