import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { AttachmentBlockSchemaExtension } from '@blocksuite/lovenotes-model';

import { AttachmentBlockAdapterExtensions } from './adapters/extension';

export class AttachmentStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-attachment-block';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(AttachmentBlockSchemaExtension);
    context.register(AttachmentBlockAdapterExtensions);
  }
}
