import { CodeLayoutPainterExtension } from '@blocksuite/lovenotes/blocks/code';
import { ImageLayoutPainterExtension } from '@blocksuite/lovenotes/blocks/image';
import { ListLayoutPainterExtension } from '@blocksuite/lovenotes/blocks/list';
import { NoteLayoutPainterExtension } from '@blocksuite/lovenotes/blocks/note';
import { ParagraphLayoutPainterExtension } from '@blocksuite/lovenotes/blocks/paragraph';
import { ViewportLayoutPainter } from '@blocksuite/lovenotes/gfx/turbo-renderer';

new ViewportLayoutPainter([
  ParagraphLayoutPainterExtension,
  ListLayoutPainterExtension,
  NoteLayoutPainterExtension,
  CodeLayoutPainterExtension,
  ImageLayoutPainterExtension,
]);
