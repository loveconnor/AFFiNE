import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/lovenotes/ext-loader';
import { FrameworkProvider } from '@toeverything/infra';
import { z } from 'zod';

import { patchLinkPreviewService } from './link-preview-service';

const optionsSchema = z.object({
  framework: z.instanceof(FrameworkProvider).optional(),
});

type LoveNotesLinkPreviewViewOptions = z.infer<typeof optionsSchema>;

export class LoveNotesLinkPreviewExtension extends ViewExtensionProvider<LoveNotesLinkPreviewViewOptions> {
  override name = 'lovenotes-link-preview-extension';

  override schema = optionsSchema;

  override setup(
    context: ViewExtensionContext,
    options?: LoveNotesLinkPreviewViewOptions
  ) {
    super.setup(context, options);
    if (!options?.framework) {
      return;
    }
    const { framework } = options;
    context.register(patchLinkPreviewService(framework));
  }
}
