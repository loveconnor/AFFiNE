import { ViewExtensionProvider } from '@blocksuite/lovenotes-ext-loader';

import { effects } from './effects';

export class FramePanelViewExtension extends ViewExtensionProvider {
  override name = 'lovenotes-frame-panel-fragment';

  override effect() {
    super.effect();
    effects();
  }
}
