import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { BlockViewExtension, FlavourExtension } from '@blocksuite/std';
import { literal } from 'lit/static-html.js';

import { effects } from './effects.js';
import { ListKeymapExtension, ListTextKeymapExtension } from './list-keymap.js';
import { ListMarkdownExtension } from './markdown.js';

export class ListViewExtension extends ViewExtensionProvider {
  override name = 'lovenotes-list-block';

  override effect(): void {
    super.effect();
    effects();
  }

  override setup(context: ViewExtensionContext) {
    super.setup(context);
    context.register([
      FlavourExtension('lovenotes:list'),
      BlockViewExtension('lovenotes:list', literal`lovenotes-list`),
      ListKeymapExtension,
      ListTextKeymapExtension,
      ListMarkdownExtension,
    ]);
  }
}
