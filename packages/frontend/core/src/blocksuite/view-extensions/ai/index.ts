import { toolbarAIEntryConfig } from '@lovenotes/core/blocksuite/ai';
import { AIChatBlockSpec } from '@lovenotes/core/blocksuite/ai/blocks';
import { AITranscriptionBlockSpec } from '@lovenotes/core/blocksuite/ai/blocks/ai-chat-block/ai-transcription-block';
import { edgelessToolbarAIEntryConfig } from '@lovenotes/core/blocksuite/ai/entries/edgeless';
import { imageToolbarAIEntryConfig } from '@lovenotes/core/blocksuite/ai/entries/image-toolbar/setup-image-toolbar';
import { AICodeBlockWatcher } from '@lovenotes/core/blocksuite/ai/extensions/ai-code';
import { getAIEdgelessRootWatcher } from '@lovenotes/core/blocksuite/ai/extensions/ai-edgeless-root';
import { getAIPageRootWatcher } from '@lovenotes/core/blocksuite/ai/extensions/ai-page-root';
import { AiSlashMenuConfigExtension } from '@lovenotes/core/blocksuite/ai/extensions/ai-slash-menu';
import { CopilotTool } from '@lovenotes/core/blocksuite/ai/tool/copilot-tool';
import { aiPanelWidget } from '@lovenotes/core/blocksuite/ai/widgets/ai-panel/ai-panel';
import { edgelessCopilotWidget } from '@lovenotes/core/blocksuite/ai/widgets/edgeless-copilot';
import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/lovenotes/ext-loader';
import { ToolbarModuleExtension } from '@blocksuite/lovenotes/shared/services';
import { BlockFlavourIdentifier } from '@blocksuite/lovenotes/std';
import { FrameworkProvider } from '@toeverything/infra';
import { z } from 'zod';

import {
  BlockDiffService,
  BlockDiffWatcher,
} from '../../ai/services/block-diff';
import { blockDiffWidgetForBlock } from '../../ai/widgets/block-diff/block';
import { blockDiffWidgetForPage } from '../../ai/widgets/block-diff/page';
import { EdgelessClipboardAIChatConfig } from './edgeless-clipboard';

const optionsSchema = z.object({
  enable: z.boolean().optional(),
  framework: z.instanceof(FrameworkProvider).optional(),
});

type AIViewOptions = z.infer<typeof optionsSchema>;

export class AIViewExtension extends ViewExtensionProvider<AIViewOptions> {
  override name = 'lovenotes-ai-view-extension';

  override schema = optionsSchema;

  override setup(context: ViewExtensionContext, options?: AIViewOptions) {
    super.setup(context, options);
    if (!options?.enable) return;
    const framework = options.framework;
    if (!framework) return;

    context
      .register(AIChatBlockSpec)
      .register(AITranscriptionBlockSpec)
      .register(EdgelessClipboardAIChatConfig)
      .register(AICodeBlockWatcher)
      .register(
        ToolbarModuleExtension({
          id: BlockFlavourIdentifier('custom:lovenotes:image'),
          config: imageToolbarAIEntryConfig(),
        })
      );

    if (context.scope === 'edgeless' || context.scope === 'page') {
      context.register([
        aiPanelWidget,
        AiSlashMenuConfigExtension(),
        ToolbarModuleExtension({
          id: BlockFlavourIdentifier('custom:lovenotes:note'),
          config: toolbarAIEntryConfig(),
        }),
      ]);
    }
    if (context.scope === 'edgeless') {
      context.register([
        CopilotTool,
        edgelessCopilotWidget,
        getAIEdgelessRootWatcher(),
        // In note
        ToolbarModuleExtension({
          id: BlockFlavourIdentifier('custom:lovenotes:surface:*'),
          config: edgelessToolbarAIEntryConfig(),
        }),
      ]);
    }
    if (context.scope === 'page') {
      context.register([
        blockDiffWidgetForPage,
        blockDiffWidgetForBlock,
        getAIPageRootWatcher(),
        BlockDiffService,
        BlockDiffWatcher,
      ]);

    }
  }
}
