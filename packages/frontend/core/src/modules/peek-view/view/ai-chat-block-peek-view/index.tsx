import type { EditorHost } from '@blocksuite/lovenotes/std';
import { toReactNode } from '@lovenotes/component';
import { AIChatBlockPeekViewTemplate } from '@lovenotes/core/blocksuite/ai';
import type { AIChatBlockModel } from '@lovenotes/core/blocksuite/ai/blocks/ai-chat-block/model/ai-chat-model';
import { registerAIAppEffects } from '@lovenotes/core/blocksuite/ai/effects/app';
import { useAIChatConfig } from '@lovenotes/core/components/hooks/lovenotes/use-ai-chat-config';
import { useAISubscribe } from '@lovenotes/core/components/hooks/lovenotes/use-ai-subscribe';
import {
  AIDraftService,
  AIToolsConfigService,
} from '@lovenotes/core/modules/ai-button';
import { AIModelService } from '@lovenotes/core/modules/ai-button/services/models';
import {
  ServerService,
  SubscriptionService,
} from '@lovenotes/core/modules/cloud';
import { WorkspaceDialogService } from '@lovenotes/core/modules/dialogs';
import { FeatureFlagService } from '@lovenotes/core/modules/feature-flag';
import { useFramework } from '@lovenotes/infra';
import { useMemo } from 'react';

registerAIAppEffects();

export type AIChatBlockPeekViewProps = {
  model: AIChatBlockModel;
  host: EditorHost;
};

export const AIChatBlockPeekView = ({
  model,
  host,
}: AIChatBlockPeekViewProps) => {
  const { docDisplayConfig, searchMenuConfig, reasoningConfig } =
    useAIChatConfig();

  const framework = useFramework();
  const serverService = framework.get(ServerService);
  const lovenotesFeatureFlagService = framework.get(FeatureFlagService);
  const lovenotesWorkspaceDialogService = framework.get(WorkspaceDialogService);
  const aiDraftService = framework.get(AIDraftService);
  const aiToolsConfigService = framework.get(AIToolsConfigService);
  const subscriptionService = framework.get(SubscriptionService);
  const aiModelService = framework.get(AIModelService);
  const handleAISubscribe = useAISubscribe();

  return useMemo(() => {
    const template = AIChatBlockPeekViewTemplate(
      model,
      host,
      docDisplayConfig,
      searchMenuConfig,
      reasoningConfig,
      serverService,
      lovenotesFeatureFlagService,
      lovenotesWorkspaceDialogService,
      aiDraftService,
      aiToolsConfigService,
      subscriptionService,
      aiModelService,
      handleAISubscribe
    );
    return toReactNode(template);
  }, [
    model,
    host,
    docDisplayConfig,
    searchMenuConfig,
    reasoningConfig,
    serverService,
    lovenotesFeatureFlagService,
    lovenotesWorkspaceDialogService,
    aiDraftService,
    aiToolsConfigService,
    subscriptionService,
    aiModelService,
    handleAISubscribe,
  ]);
};
