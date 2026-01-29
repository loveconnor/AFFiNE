import { createEmbedBlockHtmlAdapterMatcher } from '@blocksuite/lovenotes-block-embed';
import { BookmarkBlockSchema } from '@blocksuite/lovenotes-model';
import { BlockHtmlAdapterExtension } from '@blocksuite/lovenotes-shared/adapters';

export const bookmarkBlockHtmlAdapterMatcher =
  createEmbedBlockHtmlAdapterMatcher(BookmarkBlockSchema.model.flavour);

export const BookmarkBlockHtmlAdapterExtension = BlockHtmlAdapterExtension(
  bookmarkBlockHtmlAdapterMatcher
);
