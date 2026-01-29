import { EmbedHtmlBlockSchema } from '@blocksuite/lovenotes-model';
import { BlockViewExtension } from '@blocksuite/std';
import type { ExtensionType } from '@blocksuite/store';
import { literal } from 'lit/static-html.js';

import { createBuiltinToolbarConfigExtension } from './configs/toolbar';
import { EmbedEdgelessHtmlBlockInteraction } from './embed-edgeless-html-block';

const flavour = EmbedHtmlBlockSchema.model.flavour;

export const EmbedHtmlViewExtensions: ExtensionType[] = [
  BlockViewExtension(flavour, model => {
    return model.parent?.flavour === 'lovenotes:surface'
      ? literal`lovenotes-embed-edgeless-html-block`
      : literal`lovenotes-embed-html-block`;
  }),
  createBuiltinToolbarConfigExtension(flavour),
  EmbedEdgelessHtmlBlockInteraction,
].flat();
