import { EmbedGithubBlockSchema } from '@blocksuite/lovenotes-model';
import { BlockPlainTextAdapterExtension } from '@blocksuite/lovenotes-shared/adapters';

import { createEmbedBlockPlainTextAdapterMatcher } from '../../common/adapters/plain-text.js';

export const embedGithubBlockPlainTextAdapterMatcher =
  createEmbedBlockPlainTextAdapterMatcher(EmbedGithubBlockSchema.model.flavour);

export const EmbedGithubBlockPlainTextAdapterExtension =
  BlockPlainTextAdapterExtension(embedGithubBlockPlainTextAdapterMatcher);
