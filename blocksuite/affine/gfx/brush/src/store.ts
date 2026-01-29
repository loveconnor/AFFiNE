import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';

import {
  brushToMarkdownAdapterMatcher,
  brushToPlainTextAdapterMatcher,
} from './adapter';

export class BrushStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-brush-gfx';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(brushToMarkdownAdapterMatcher);
    context.register(brushToPlainTextAdapterMatcher);
  }
}
