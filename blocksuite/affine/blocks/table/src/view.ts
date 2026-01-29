import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { TableModelFlavour } from '@blocksuite/lovenotes-model';
import { SlashMenuConfigExtension } from '@blocksuite/lovenotes-widget-slash-menu';
import { BlockViewExtension, FlavourExtension } from '@blocksuite/std';
import { literal } from 'lit/static-html.js';

import { tableSlashMenuConfig } from './configs/slash-menu';
import { effects } from './effects';

export class TableViewExtension extends ViewExtensionProvider {
  override name = 'lovenotes-table-block';

  override effect(): void {
    super.effect();
    effects();
  }

  override setup(context: ViewExtensionContext) {
    super.setup(context);
    context.register([
      FlavourExtension(TableModelFlavour),
      BlockViewExtension(TableModelFlavour, literal`lovenotes-table`),
      SlashMenuConfigExtension(TableModelFlavour, tableSlashMenuConfig),
    ]);
  }
}
