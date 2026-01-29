import { ViewExtensionProvider } from '@blocksuite/lovenotes-ext-loader';

import { effects } from './effects';

export class OutlineViewExtension extends ViewExtensionProvider {
  override name = 'lovenotes-outline-fragment';

  override effect() {
    super.effect();
    effects();
  }
}
