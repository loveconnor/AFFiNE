import { getEditorConfigExtension } from '@lovenotes/core/blocksuite/view-extensions/editor-config/get-config';
import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/lovenotes/ext-loader';
import { FrameworkProvider } from '@toeverything/infra';
import { z } from 'zod';

const optionsSchema = z.object({
  framework: z.instanceof(FrameworkProvider).optional(),
});

type LoveNotesEditorConfigViewOptions = z.infer<typeof optionsSchema>;

export class LoveNotesEditorConfigViewExtension extends ViewExtensionProvider<LoveNotesEditorConfigViewOptions> {
  override name = 'lovenotes-view-editor-config';

  override schema = optionsSchema;

  override setup(
    context: ViewExtensionContext,
    options?: LoveNotesEditorConfigViewOptions
  ) {
    super.setup(context, options);
    const framework = options?.framework;
    if (!framework) {
      return;
    }

    if (context.scope === 'edgeless' || context.scope === 'page') {
      context.register(getEditorConfigExtension(framework));
    }
  }
}
