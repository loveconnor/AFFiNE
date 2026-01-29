import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';

import { frameTitleWidget } from './lovenotes-frame-title-widget';
import { effects } from './effects';

export class FrameTitleViewExtension extends ViewExtensionProvider {
  override name = 'lovenotes-frame-title-widget';

  override effect() {
    super.effect();
    effects();
  }

  override setup(context: ViewExtensionContext) {
    super.setup(context);
    if (context.scope === 'edgeless') {
      context.register(frameTitleWidget);
    }
  }
}
