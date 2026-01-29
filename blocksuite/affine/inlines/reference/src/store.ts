import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';

import {
  referenceDeltaMarkdownAdapterMatch,
  referenceDeltaToHtmlAdapterMatcher,
  referenceDeltaToMarkdownAdapterMatcher,
} from './adapters';

export class ReferenceStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-reference-inline';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(referenceDeltaToHtmlAdapterMatcher);
    context.register(referenceDeltaToMarkdownAdapterMatcher);
    context.register(referenceDeltaMarkdownAdapterMatch);
  }
}
