import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { LatexBlockSchemaExtension } from '@blocksuite/lovenotes-model';

import { LatexBlockAdapterExtensions } from './adapters/extension';
import { LatexMarkdownPreprocessorExtension } from './adapters/markdown/preprocessor';

export class LatexStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-latex-block';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register([LatexBlockSchemaExtension]);
    context.register(LatexBlockAdapterExtensions);
    context.register(LatexMarkdownPreprocessorExtension);
  }
}
