import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/lovenotes/ext-loader';
import { getPreviewThemeExtension } from '@lovenotes/core/blocksuite/view-extensions/theme/preview-theme';
import { getThemeExtension } from '@lovenotes/core/blocksuite/view-extensions/theme/theme';
import { FrameworkProvider } from '@lovenotes/infra';
import { z } from 'zod';

const optionsSchema = z.object({
  framework: z.instanceof(FrameworkProvider).optional(),
});

type LoveNotesThemeViewOptions = z.infer<typeof optionsSchema>;

export class LoveNotesThemeViewExtension extends ViewExtensionProvider<LoveNotesThemeViewOptions> {
  override name = 'lovenotes-view-theme';

  override schema = optionsSchema;

  override setup(
    context: ViewExtensionContext,
    options?: LoveNotesThemeViewOptions
  ) {
    super.setup(context, options);
    const framework = options?.framework;
    if (!framework) {
      return;
    }

    if (this.isPreview(context.scope)) {
      context.register(getPreviewThemeExtension(framework));
    } else {
      context.register(getThemeExtension(framework));
    }
  }
}
