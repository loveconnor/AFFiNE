import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { SurfaceRefBlockSchemaExtension } from '@blocksuite/lovenotes-model';

export class SurfaceRefStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-surface-ref-block';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(SurfaceRefBlockSchemaExtension);
  }
}
