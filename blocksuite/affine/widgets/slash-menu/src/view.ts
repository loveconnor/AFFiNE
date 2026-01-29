import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';

import { effects } from './effects';
import { SlashMenuExtension } from './extensions';

export class SlashMenuViewExtension extends ViewExtensionProvider {
  override name = 'lovenotes-slash-menu-widget';

  override effect() {
    super.effect();
    effects();
  }

  override setup(context: ViewExtensionContext) {
    super.setup(context);
    if (this.isMobile(context.scope)) return;
    context.register(SlashMenuExtension);
  }
}
