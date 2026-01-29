import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { CodeBlockSchemaExtension } from '@blocksuite/lovenotes-model';

import { CodeBlockAdapterExtensions } from './adapters/extension';
import { CodeMarkdownPreprocessorExtension } from './adapters/markdown/preprocessor';

export class CodeStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-code-block';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(CodeBlockSchemaExtension);
    context.register(CodeBlockAdapterExtensions);
    context.register(CodeMarkdownPreprocessorExtension);
  }
}
