import { textKeymap } from '@blocksuite/lovenotes-inline-preset';
import { CodeBlockSchema } from '@blocksuite/lovenotes-model';
import { KeymapExtension } from '@blocksuite/std';

export const CodeKeymapExtension = KeymapExtension(textKeymap, {
  flavour: CodeBlockSchema.model.flavour,
});
