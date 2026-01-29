import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { SlashMenuConfigExtension } from '@blocksuite/lovenotes-widget-slash-menu';
import { BlockViewExtension } from '@blocksuite/std';
import { literal } from 'lit/static-html.js';

import { latexSlashMenuConfig } from './configs/slash-menu';
import { effects } from './effects';

export class LatexViewExtension extends ViewExtensionProvider {
  override name = 'lovenotes-latex-block';

  override effect() {
    super.effect();
    effects();
  }

  override setup(context: ViewExtensionContext) {
    super.setup(context);
    context.register([
      BlockViewExtension('lovenotes:latex', literal`lovenotes-latex`),
      SlashMenuConfigExtension('lovenotes:latex', latexSlashMenuConfig),
    ]);
  }
}
