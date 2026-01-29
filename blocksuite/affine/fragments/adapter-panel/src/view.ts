import { ViewExtensionProvider } from '@blocksuite/lovenotes-ext-loader';

import { effects } from './effects';

export class AdapterPanelViewExtension extends ViewExtensionProvider {
  override name = 'lovenotes-adapter-panel-fragment';

  override effect() {
    super.effect();
    effects();
  }
}
