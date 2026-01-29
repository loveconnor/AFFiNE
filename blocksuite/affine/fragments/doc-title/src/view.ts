import { ViewExtensionProvider } from '@blocksuite/lovenotes-ext-loader';

import { effects } from './effects';

export class DocTitleViewExtension extends ViewExtensionProvider {
  override name = 'lovenotes-doc-title-fragment';

  override effect() {
    super.effect();
    effects();
  }
}
