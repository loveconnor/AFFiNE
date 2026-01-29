import { AttachmentStoreExtension } from '@blocksuite/lovenotes-block-attachment/store';
import { BookmarkStoreExtension } from '@blocksuite/lovenotes-block-bookmark/store';
import { CalloutStoreExtension } from '@blocksuite/lovenotes-block-callout/store';
import { CodeStoreExtension } from '@blocksuite/lovenotes-block-code/store';
import { DataViewStoreExtension } from '@blocksuite/lovenotes-block-data-view/store';
import { DatabaseStoreExtension } from '@blocksuite/lovenotes-block-database/store';
import { DividerStoreExtension } from '@blocksuite/lovenotes-block-divider/store';
import { EdgelessTextStoreExtension } from '@blocksuite/lovenotes-block-edgeless-text/store';
import { EmbedStoreExtension } from '@blocksuite/lovenotes-block-embed/store';
import { EmbedDocStoreExtension } from '@blocksuite/lovenotes-block-embed-doc/store';
import { FrameStoreExtension } from '@blocksuite/lovenotes-block-frame/store';
import { ImageStoreExtension } from '@blocksuite/lovenotes-block-image/store';
import { LatexStoreExtension } from '@blocksuite/lovenotes-block-latex/store';
import { ListStoreExtension } from '@blocksuite/lovenotes-block-list/store';
import { NoteStoreExtension } from '@blocksuite/lovenotes-block-note/store';
import { ParagraphStoreExtension } from '@blocksuite/lovenotes-block-paragraph/store';
import { RootStoreExtension } from '@blocksuite/lovenotes-block-root/store';
import { SurfaceStoreExtension } from '@blocksuite/lovenotes-block-surface/store';
import { SurfaceRefStoreExtension } from '@blocksuite/lovenotes-block-surface-ref/store';
import { TableStoreExtension } from '@blocksuite/lovenotes-block-table/store';
import { FoundationStoreExtension } from '@blocksuite/lovenotes-foundation/store';
import { BrushStoreExtension } from '@blocksuite/lovenotes-gfx-brush/store';
import { ConnectorStoreExtension } from '@blocksuite/lovenotes-gfx-connector/store';
import { GroupStoreExtension } from '@blocksuite/lovenotes-gfx-group/store';
import { MindmapStoreExtension } from '@blocksuite/lovenotes-gfx-mindmap/store';
import { ShapeStoreExtension } from '@blocksuite/lovenotes-gfx-shape/store';
import { TextStoreExtension } from '@blocksuite/lovenotes-gfx-text/store';
import { FootnoteStoreExtension } from '@blocksuite/lovenotes-inline-footnote/store';
import { LatexStoreExtension as InlineLatexStoreExtension } from '@blocksuite/lovenotes-inline-latex/store';
import { LinkStoreExtension } from '@blocksuite/lovenotes-inline-link/store';
import { InlinePresetStoreExtension } from '@blocksuite/lovenotes-inline-preset/store';
import { ReferenceStoreExtension } from '@blocksuite/lovenotes-inline-reference/store';

export function getInternalStoreExtensions() {
  return [
    FoundationStoreExtension,

    AttachmentStoreExtension,
    BookmarkStoreExtension,
    CalloutStoreExtension,
    CodeStoreExtension,
    DataViewStoreExtension,
    DatabaseStoreExtension,
    DividerStoreExtension,
    EdgelessTextStoreExtension,
    EmbedStoreExtension,
    EmbedDocStoreExtension,
    FrameStoreExtension,
    ImageStoreExtension,
    LatexStoreExtension,
    ListStoreExtension,
    NoteStoreExtension,
    ParagraphStoreExtension,
    SurfaceRefStoreExtension,
    TableStoreExtension,
    SurfaceStoreExtension,
    RootStoreExtension,

    FootnoteStoreExtension,
    LinkStoreExtension,
    ReferenceStoreExtension,
    InlineLatexStoreExtension,
    InlinePresetStoreExtension,

    BrushStoreExtension,
    ShapeStoreExtension,
    MindmapStoreExtension,
    ConnectorStoreExtension,
    GroupStoreExtension,
    TextStoreExtension,
  ];
}
