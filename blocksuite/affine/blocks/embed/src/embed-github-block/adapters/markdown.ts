import { EmbedGithubBlockSchema } from '@blocksuite/lovenotes-model';
import { BlockMarkdownAdapterExtension } from '@blocksuite/lovenotes-shared/adapters';

import { createEmbedBlockMarkdownAdapterMatcher } from '../../common/adapters/markdown.js';

export const embedGithubBlockMarkdownAdapterMatcher =
  createEmbedBlockMarkdownAdapterMatcher(EmbedGithubBlockSchema.model.flavour);

export const EmbedGithubMarkdownAdapterExtension =
  BlockMarkdownAdapterExtension(embedGithubBlockMarkdownAdapterMatcher);
