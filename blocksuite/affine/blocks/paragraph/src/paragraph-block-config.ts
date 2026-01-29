import type { ParagraphBlockModel } from '@blocksuite/lovenotes-model';
import { ConfigExtensionFactory } from '@blocksuite/std';

export interface ParagraphBlockConfig {
  getPlaceholder: (model: ParagraphBlockModel) => string;
}

export const ParagraphBlockConfigExtension =
  ConfigExtensionFactory<ParagraphBlockConfig>('lovenotes:paragraph');
