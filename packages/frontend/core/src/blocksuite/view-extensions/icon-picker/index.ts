import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/lovenotes/ext-loader';
import { FrameworkProvider } from '@lovenotes/infra';
import { z } from 'zod';

import { patchIconPickerService } from './icon-picker-service';

const optionsSchema = z.object({
  framework: z.instanceof(FrameworkProvider).optional(),
});

type LoveNotesIconPickerViewOptions = z.infer<typeof optionsSchema>;

export class LoveNotesIconPickerExtension extends ViewExtensionProvider<LoveNotesIconPickerViewOptions> {
  override name = 'lovenotes-icon-picker-extension';

  override schema = optionsSchema;

  override setup(
    context: ViewExtensionContext,
    options?: LoveNotesIconPickerViewOptions
  ) {
    super.setup(context, options);
    if (!options?.framework) {
      return;
    }
    const { framework } = options;
    context.register(patchIconPickerService(framework));
  }
}
