import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';

import {
  latexDeltaMarkdownAdapterMatch,
  latexDeltaToMarkdownAdapterMatcher,
  markdownInlineMathToDeltaMatcher,
} from './adapters';

export class LatexStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-latex-inline';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(latexDeltaMarkdownAdapterMatch);
    context.register(latexDeltaToMarkdownAdapterMatcher);
    context.register(markdownInlineMathToDeltaMatcher);
  }
}
