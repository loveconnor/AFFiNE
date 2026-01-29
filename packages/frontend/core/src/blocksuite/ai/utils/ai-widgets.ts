import type { EditorHost } from '@blocksuite/lovenotes/std';

import {
  AFFINE_AI_PANEL_WIDGET,
  LoveNotesAIPanelWidget,
} from '../widgets/ai-panel/ai-panel';

export const getAIPanelWidget = (host: EditorHost): LoveNotesAIPanelWidget => {
  const rootBlockId = host.store.root?.id;
  if (!rootBlockId) {
    throw new Error('rootBlockId is not found');
  }
  const aiPanel = host.view.getWidget(AFFINE_AI_PANEL_WIDGET, rootBlockId);
  if (!(aiPanel instanceof LoveNotesAIPanelWidget)) {
    throw new Error('AI panel not found');
  }
  return aiPanel;
};
