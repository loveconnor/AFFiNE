import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';

import { toolbarWidget } from '.';
import { effects } from './effects';

export class ToolbarViewExtension extends ViewExtensionProvider {
  override name = 'lovenotes-toolbar-widget';

  override effect() {
    super.effect();
    effects();
  }

  override setup(context: ViewExtensionContext) {
    super.setup(context);
    if (this.isMobile(context.scope)) return;
    context.register(toolbarWidget);
  }
}
