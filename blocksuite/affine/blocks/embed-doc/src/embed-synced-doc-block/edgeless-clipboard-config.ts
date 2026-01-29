import { EdgelessClipboardConfig } from '@blocksuite/lovenotes-block-surface';
import { ReferenceInfoSchema } from '@blocksuite/lovenotes-model';
import { type BlockSnapshot } from '@blocksuite/store';

export class EdgelessClipboardEmbedSyncedDocConfig extends EdgelessClipboardConfig {
  static override readonly key = 'lovenotes:embed-synced-doc';

  override createBlock(syncedDocEmbed: BlockSnapshot): string | null {
    if (!this.surface) return null;

    const { xywh, style, caption, scale, pageId, params } =
      syncedDocEmbed.props;
    const referenceInfo = ReferenceInfoSchema.parse({ pageId, params });

    return this.crud.addBlock(
      'lovenotes:embed-synced-doc',
      {
        xywh,
        style,
        caption,
        scale,
        ...referenceInfo,
      },
      this.surface.model.id
    );
  }
}
