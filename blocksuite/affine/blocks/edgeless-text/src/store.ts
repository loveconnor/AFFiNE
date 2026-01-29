import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { EdgelessTextBlockSchemaExtension } from '@blocksuite/lovenotes-model';

export class EdgelessTextStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-edgeless-text-block';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(EdgelessTextBlockSchemaExtension);
  }
}
