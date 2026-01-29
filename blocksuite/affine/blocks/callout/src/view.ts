import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { SlashMenuConfigExtension } from '@blocksuite/lovenotes-widget-slash-menu';
import { BlockViewExtension, FlavourExtension } from '@blocksuite/std';
import { literal } from 'lit/static-html.js';

import { CalloutKeymapExtension } from './callout-keymap';
import { calloutSlashMenuConfig } from './configs/slash-menu';
import { createBuiltinToolbarConfigExtension } from './configs/toolbar';
import { effects } from './effects';

export class CalloutViewExtension extends ViewExtensionProvider {
  override name = 'lovenotes-callout-block';

  override effect() {
    super.effect();
    effects();
  }

  override setup(context: ViewExtensionContext) {
    super.setup(context);
    context.register([
      FlavourExtension('lovenotes:callout'),
      BlockViewExtension('lovenotes:callout', literal`lovenotes-callout`),
      CalloutKeymapExtension,
      SlashMenuConfigExtension('lovenotes:callout', calloutSlashMenuConfig),
      ...createBuiltinToolbarConfigExtension('lovenotes:callout'),
    ]);
  }
}
