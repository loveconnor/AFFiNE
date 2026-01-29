import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes-ext-loader';
import { NoteBlockSchemaExtension } from '@blocksuite/lovenotes-model';
import { z } from 'zod';

import {
  DocNoteBlockAdapterExtensions,
  EdgelessNoteBlockAdapterExtensions,
} from './adapters';

const optionsSchema = z.object({
  mode: z.enum(['doc', 'edgeless']).optional(),
});

export class NoteStoreExtension extends StoreExtensionProvider<
  z.infer<typeof optionsSchema>
> {
  override name = 'lovenotes-note-block';

  override schema = optionsSchema;

  override setup(
    context: StoreExtensionContext,
    options?: z.infer<typeof optionsSchema>
  ) {
    super.setup(context);
    context.register(NoteBlockSchemaExtension);
    if (options?.mode === 'edgeless') {
      context.register(EdgelessNoteBlockAdapterExtensions);
    } else {
      context.register(DocNoteBlockAdapterExtensions);
    }
  }
}
