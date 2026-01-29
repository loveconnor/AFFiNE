import { insertEmbedCard } from '@blocksuite/lovenotes-block-embed';
import type { EmbedCardStyle, ReferenceParams } from '@blocksuite/lovenotes-model';
import type { Command } from '@blocksuite/std';

export type LinkableFlavour =
  | 'lovenotes:bookmark'
  | 'lovenotes:embed-linked-doc'
  | 'lovenotes:embed-synced-doc'
  | 'lovenotes:embed-iframe'
  | 'lovenotes:embed-figma'
  | 'lovenotes:embed-github'
  | 'lovenotes:embed-loom'
  | 'lovenotes:embed-youtube';

export type InsertedLinkType = {
  flavour: LinkableFlavour;
} | null;

export const insertEmbedLinkedDocCommand: Command<
  {
    docId: string;
    params?: ReferenceParams;
  },
  { blockId: string }
> = (ctx, next) => {
  const { docId, params, std } = ctx;
  const flavour = 'lovenotes:embed-linked-doc';
  const targetStyle: EmbedCardStyle = 'vertical';
  const props: Record<string, unknown> = { pageId: docId };
  if (params) props.params = params;
  const blockId = insertEmbedCard(std, { flavour, targetStyle, props });
  if (!blockId) return;
  next({ blockId });
};
