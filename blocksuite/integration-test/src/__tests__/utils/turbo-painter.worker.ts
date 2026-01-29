import { ImageLayoutPainterExtension } from '@blocksuite/lovenotes-block-image/turbo-painter';
import { ListLayoutPainterExtension } from '@blocksuite/lovenotes-block-list/turbo-painter';
import { NoteLayoutPainterExtension } from '@blocksuite/lovenotes-block-note/turbo-painter';
import { ParagraphLayoutPainterExtension } from '@blocksuite/lovenotes-block-paragraph/turbo-painter';
import { ViewportLayoutPainter } from '@blocksuite/lovenotes-gfx-turbo-renderer/painter';

new ViewportLayoutPainter([
  ParagraphLayoutPainterExtension,
  ListLayoutPainterExtension,
  NoteLayoutPainterExtension,
  ImageLayoutPainterExtension,
]);
