import { BlockViewExtension } from '@blocksuite/lovenotes/std';
import type { ExtensionType } from '@blocksuite/lovenotes/store';
import { literal } from 'lit/static-html.js';

export const AIChatBlockSpec: ExtensionType[] = [
  BlockViewExtension('lovenotes:embed-ai-chat', model => {
    const parent = model.store.getParent(model.id);

    if (parent?.flavour === 'lovenotes:surface') {
      return literal`lovenotes-edgeless-ai-chat`;
    }

    return literal`lovenotes-ai-chat`;
  }),
];
