import { createEmbedBlockPlainTextAdapterMatcher } from '@blocksuite/lovenotes-block-embed';
import { BookmarkBlockSchema } from '@blocksuite/lovenotes-model';
import { BlockPlainTextAdapterExtension } from '@blocksuite/lovenotes-shared/adapters';

export const bookmarkBlockPlainTextAdapterMatcher =
  createEmbedBlockPlainTextAdapterMatcher(BookmarkBlockSchema.model.flavour);

export const BookmarkBlockPlainTextAdapterExtension =
  BlockPlainTextAdapterExtension(bookmarkBlockPlainTextAdapterMatcher);
