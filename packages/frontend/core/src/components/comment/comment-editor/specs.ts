import { CodeBlockViewExtension } from '@blocksuite/lovenotes/blocks/code/view';
import { DividerViewExtension } from '@blocksuite/lovenotes/blocks/divider/view';
import { LatexViewExtension as LatexBlockViewExtension } from '@blocksuite/lovenotes/blocks/latex/view';
import { ListViewExtension } from '@blocksuite/lovenotes/blocks/list/view';
import { NoteViewExtension } from '@blocksuite/lovenotes/blocks/note/view';
import { ParagraphViewExtension } from '@blocksuite/lovenotes/blocks/paragraph/view';
import { RootViewExtension } from '@blocksuite/lovenotes/blocks/root/view';
import {
  PeekViewExtension,
  type PeekViewService,
} from '@blocksuite/lovenotes/components/peek';
import {
  type ViewExtensionContext,
  ViewExtensionManager,
  ViewExtensionProvider,
} from '@blocksuite/lovenotes/ext-loader';
import { PlainTextClipboardConfig } from '@blocksuite/lovenotes/foundation/clipboard';
import { LatexInlineSpecExtension } from '@blocksuite/lovenotes/inlines/latex';
import { LatexViewExtension as LatexInlineViewExtension } from '@blocksuite/lovenotes/inlines/latex/view';
import { LinkInlineSpecExtension } from '@blocksuite/lovenotes/inlines/link';
import { LinkViewExtension } from '@blocksuite/lovenotes/inlines/link/view';
import { MentionInlineSpecExtension } from '@blocksuite/lovenotes/inlines/mention';
import { MentionViewExtension } from '@blocksuite/lovenotes/inlines/mention/view';
import {
  BackgroundInlineSpecExtension,
  BoldInlineSpecExtension,
  CodeInlineSpecExtension,
  ColorInlineSpecExtension,
  InlineSpecExtensions,
  ItalicInlineSpecExtension,
  StrikeInlineSpecExtension,
  UnderlineInlineSpecExtension,
} from '@blocksuite/lovenotes/inlines/preset';
import { ReferenceInlineSpecExtension } from '@blocksuite/lovenotes/inlines/reference';
import { ReferenceViewExtension } from '@blocksuite/lovenotes/inlines/reference/view';
import {
  DefaultOpenDocExtension,
  DocDisplayMetaService,
  DocModeService,
  FileSizeLimitService,
  FontConfigExtension,
  fontConfigSchema,
  FontLoaderService,
  PageViewportServiceExtension,
  ThemeService,
  ToolbarRegistryExtension,
} from '@blocksuite/lovenotes/shared/services';
import type { LoveNotesTextAttributes } from '@blocksuite/lovenotes/shared/types';
import { InlineManagerExtension } from '@blocksuite/lovenotes/std/inline';
import { LinkedDocViewExtension } from '@blocksuite/lovenotes/widgets/linked-doc/view';
import { ToolbarViewExtension } from '@blocksuite/lovenotes/widgets/toolbar/view';
import { ViewportOverlayViewExtension } from '@blocksuite/lovenotes/widgets/viewport-overlay/view';
import { CloudViewExtension } from '@lovenotes/core/blocksuite/view-extensions/cloud';
import { LoveNotesEditorViewExtension } from '@lovenotes/core/blocksuite/view-extensions/editor-view/editor-view';
import { LoveNotesThemeViewExtension } from '@lovenotes/core/blocksuite/view-extensions/theme';
import { I18n } from '@lovenotes/i18n';
import type { FrameworkProvider } from '@lovenotes/infra';
import { z } from 'zod';

import { createCommentLinkedWidgetConfig } from './linked-widget-config';

const commentEditorViewExtensionOptionsSchema = z.object({
  peekView: z.optional(z.custom<PeekViewService>()),
  fontConfig: z.optional(z.array(fontConfigSchema)),
});

export type CommentEditorViewExtensionOptions = z.infer<
  typeof commentEditorViewExtensionOptionsSchema
>;

class CommentEditorViewExtensionProvider extends ViewExtensionProvider<CommentEditorViewExtensionOptions> {
  override name = 'comment-editor';

  override schema = commentEditorViewExtensionOptionsSchema;

  override setup(
    context: ViewExtensionContext,
    options?: CommentEditorViewExtensionOptions
  ) {
    super.setup(context, options);
    context.register([
      ThemeService,
      DocModeService,
      DocDisplayMetaService,
      DefaultOpenDocExtension,
      FontLoaderService,
      ToolbarRegistryExtension,
      PageViewportServiceExtension,
      FileSizeLimitService,

      ...InlineSpecExtensions,
      InlineManagerExtension<LoveNotesTextAttributes>({
        id: 'DefaultInlineManager',
        specs: [
          BoldInlineSpecExtension.identifier,
          ItalicInlineSpecExtension.identifier,
          UnderlineInlineSpecExtension.identifier,
          StrikeInlineSpecExtension.identifier,
          CodeInlineSpecExtension.identifier,
          BackgroundInlineSpecExtension.identifier,
          ColorInlineSpecExtension.identifier,
          LatexInlineSpecExtension.identifier,
          ReferenceInlineSpecExtension.identifier,
          LinkInlineSpecExtension.identifier,
          MentionInlineSpecExtension.identifier,
        ],
      }),

      PlainTextClipboardConfig,
    ]);

    if (options?.fontConfig) {
      context.register(FontConfigExtension(options.fontConfig));
    }
    if (options?.peekView) {
      context.register(PeekViewExtension(options.peekView));
    }
  }
}

let manager: ViewExtensionManager | null = null;
export function getCommentEditorViewManager(framework: FrameworkProvider) {
  if (!manager) {
    manager = new ViewExtensionManager([
      CommentEditorViewExtensionProvider,

      // Blocks
      CodeBlockViewExtension,
      DividerViewExtension,
      LatexBlockViewExtension,
      ListViewExtension,

      NoteViewExtension,
      ParagraphViewExtension,
      RootViewExtension,

      // Inline
      LinkViewExtension,
      ReferenceViewExtension,
      MentionViewExtension,
      LatexInlineViewExtension,

      // Widget
      ToolbarViewExtension,
      ViewportOverlayViewExtension,
      LinkedDocViewExtension,

      // LoveNotes side
      LoveNotesThemeViewExtension,
      LoveNotesEditorViewExtension,

      // for rendering mentions
      CloudViewExtension,
    ]);

    manager.configure(ParagraphViewExtension, {
      getPlaceholder: () => {
        return I18n.t('com.lovenotes.notification.comment-prompt');
      },
    });

    manager.configure(
      LinkedDocViewExtension,
      createCommentLinkedWidgetConfig(framework)
    );

    manager.configure(CloudViewExtension, {
      framework,
      enableCloud: true,
    });
  }
  return manager;
}
