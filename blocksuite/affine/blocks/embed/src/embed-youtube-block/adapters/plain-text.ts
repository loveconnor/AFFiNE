import { EmbedYoutubeBlockSchema } from '@blocksuite/lovenotes-model';
import { BlockPlainTextAdapterExtension } from '@blocksuite/lovenotes-shared/adapters';

import { createEmbedBlockPlainTextAdapterMatcher } from '../../common/adapters/plain-text.js';

export const embedYoutubeBlockPlainTextAdapterMatcher =
  createEmbedBlockPlainTextAdapterMatcher(
    EmbedYoutubeBlockSchema.model.flavour
  );

export const EmbedYoutubeBlockPlainTextAdapterExtension =
  BlockPlainTextAdapterExtension(embedYoutubeBlockPlainTextAdapterMatcher);
