import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { RootBlockSchemaExtension } from '@blocksuite/lovenotes-model';

import { RootBlockAdapterExtensions } from './adapters/extension';

export class RootStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-root-block';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(RootBlockSchemaExtension);
    context.register(RootBlockAdapterExtensions);
  }
}
