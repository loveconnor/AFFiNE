import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { FrameBlockSchemaExtension } from '@blocksuite/lovenotes-model';

export class FrameStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-frame-block';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register([FrameBlockSchemaExtension]);
  }
}
