import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/lovenotes/ext-loader';
import { z } from 'zod';

import { patchDatabaseBlockConfigService } from './database-block-config-service';

const optionsSchema = z.object({});

export type LoveNotesDatabaseViewOptions = z.infer<typeof optionsSchema>;

export class LoveNotesDatabaseViewExtension extends ViewExtensionProvider<LoveNotesDatabaseViewOptions> {
  override name = 'lovenotes-database-view';

  override schema = optionsSchema;

  override setup(
    context: ViewExtensionContext,
    options?: LoveNotesDatabaseViewOptions
  ) {
    super.setup(context, options);

    context.register(patchDatabaseBlockConfigService());
  }
}
