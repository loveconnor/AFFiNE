import { EdgelessClipboardConfig } from '@blocksuite/lovenotes-block-surface';
import { type BlockSnapshot } from '@blocksuite/store';

export class EdgelessClipboardEmbedFigmaConfig extends EdgelessClipboardConfig {
  static override readonly key = 'lovenotes:embed-figma';

  override createBlock(figmaEmbed: BlockSnapshot): string | null {
    if (!this.surface) return null;
    const { xywh, style, url, caption, title, description } = figmaEmbed.props;

    const embedFigmaId = this.crud.addBlock(
      'lovenotes:embed-figma',
      {
        xywh,
        style,
        url,
        caption,
        title,
        description,
      },
      this.surface.model.id
    );
    return embedFigmaId;
  }
}
