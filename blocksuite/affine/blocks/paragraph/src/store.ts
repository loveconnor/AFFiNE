import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { ParagraphBlockSchemaExtension } from '@blocksuite/lovenotes-model';

import { ParagraphBlockAdapterExtensions } from './adapters/extension';

export class ParagraphStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-paragraph-block';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(ParagraphBlockSchemaExtension);
    context.register(ParagraphBlockAdapterExtensions);
  }
}
