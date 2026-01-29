import { AttachmentViewExtension } from '@blocksuite/lovenotes-block-attachment/view';
import { BookmarkViewExtension } from '@blocksuite/lovenotes-block-bookmark/view';
import { CalloutViewExtension } from '@blocksuite/lovenotes-block-callout/view';
import { CodeBlockViewExtension } from '@blocksuite/lovenotes-block-code/view';
import { DataViewViewExtension } from '@blocksuite/lovenotes-block-data-view/view';
import { DatabaseViewExtension } from '@blocksuite/lovenotes-block-database/view';
import { DividerViewExtension } from '@blocksuite/lovenotes-block-divider/view';
import { EdgelessTextViewExtension } from '@blocksuite/lovenotes-block-edgeless-text/view';
import { EmbedViewExtension } from '@blocksuite/lovenotes-block-embed/view';
import { EmbedDocViewExtension } from '@blocksuite/lovenotes-block-embed-doc/view';
import { FrameViewExtension } from '@blocksuite/lovenotes-block-frame/view';
import { ImageViewExtension } from '@blocksuite/lovenotes-block-image/view';
import { LatexViewExtension } from '@blocksuite/lovenotes-block-latex/view';
import { ListViewExtension } from '@blocksuite/lovenotes-block-list/view';
import { NoteViewExtension } from '@blocksuite/lovenotes-block-note/view';
import { ParagraphViewExtension } from '@blocksuite/lovenotes-block-paragraph/view';
import { RootViewExtension } from '@blocksuite/lovenotes-block-root/view';
import { SurfaceViewExtension } from '@blocksuite/lovenotes-block-surface/view';
import { SurfaceRefViewExtension } from '@blocksuite/lovenotes-block-surface-ref/view';
import { TableViewExtension } from '@blocksuite/lovenotes-block-table/view';
import { FoundationViewExtension } from '@blocksuite/lovenotes-foundation/view';
import { AdapterPanelViewExtension } from '@blocksuite/lovenotes-fragment-adapter-panel/view';
import { DocTitleViewExtension } from '@blocksuite/lovenotes-fragment-doc-title/view';
import { FramePanelViewExtension } from '@blocksuite/lovenotes-fragment-frame-panel/view';
import { OutlineViewExtension } from '@blocksuite/lovenotes-fragment-outline/view';
import { BrushViewExtension } from '@blocksuite/lovenotes-gfx-brush/view';
import { ConnectorViewExtension } from '@blocksuite/lovenotes-gfx-connector/view';
import { GroupViewExtension } from '@blocksuite/lovenotes-gfx-group/view';
import { LinkViewExtension as GfxLinkViewExtension } from '@blocksuite/lovenotes-gfx-link/view';
import { MindmapViewExtension } from '@blocksuite/lovenotes-gfx-mindmap/view';
import { NoteViewExtension as GfxNoteViewExtension } from '@blocksuite/lovenotes-gfx-note/view';
import { PointerViewExtension } from '@blocksuite/lovenotes-gfx-pointer/view';
import { ShapeViewExtension } from '@blocksuite/lovenotes-gfx-shape/view';
import { TemplateViewExtension } from '@blocksuite/lovenotes-gfx-template/view';
import { TextViewExtension } from '@blocksuite/lovenotes-gfx-text/view';
import { InlineCommentViewExtension } from '@blocksuite/lovenotes-inline-comment/view';
import { FootnoteViewExtension } from '@blocksuite/lovenotes-inline-footnote/view';
import { LatexViewExtension as InlineLatexViewExtension } from '@blocksuite/lovenotes-inline-latex/view';
import { LinkViewExtension } from '@blocksuite/lovenotes-inline-link/view';
import { MentionViewExtension } from '@blocksuite/lovenotes-inline-mention/view';
import { InlinePresetViewExtension } from '@blocksuite/lovenotes-inline-preset/view';
import { ReferenceViewExtension } from '@blocksuite/lovenotes-inline-reference/view';
import { DragHandleViewExtension } from '@blocksuite/lovenotes-widget-drag-handle/view';
import { EdgelessAutoConnectViewExtension } from '@blocksuite/lovenotes-widget-edgeless-auto-connect/view';
import { EdgelessDraggingAreaViewExtension } from '@blocksuite/lovenotes-widget-edgeless-dragging-area/view';
import { EdgelessSelectedRectViewExtension } from '@blocksuite/lovenotes-widget-edgeless-selected-rect/view';
import { EdgelessToolbarViewExtension } from '@blocksuite/lovenotes-widget-edgeless-toolbar/view';
import { EdgelessZoomToolbarViewExtension } from '@blocksuite/lovenotes-widget-edgeless-zoom-toolbar/view';
import { FrameTitleViewExtension } from '@blocksuite/lovenotes-widget-frame-title/view';
import { KeyboardToolbarViewExtension } from '@blocksuite/lovenotes-widget-keyboard-toolbar/view';
import { LinkedDocViewExtension } from '@blocksuite/lovenotes-widget-linked-doc/view';
import { NoteSlicerViewExtension } from '@blocksuite/lovenotes-widget-note-slicer/view';
import { PageDraggingAreaViewExtension } from '@blocksuite/lovenotes-widget-page-dragging-area/view';
import { RemoteSelectionViewExtension } from '@blocksuite/lovenotes-widget-remote-selection/view';
import { ScrollAnchoringViewExtension } from '@blocksuite/lovenotes-widget-scroll-anchoring/view';
import { SlashMenuViewExtension } from '@blocksuite/lovenotes-widget-slash-menu/view';
import { ToolbarViewExtension } from '@blocksuite/lovenotes-widget-toolbar/view';
import { ViewportOverlayViewExtension } from '@blocksuite/lovenotes-widget-viewport-overlay/view';

export function getInternalViewExtensions() {
  return [
    FoundationViewExtension,

    // Gfx
    PointerViewExtension,
    GfxNoteViewExtension,
    BrushViewExtension,
    ShapeViewExtension,
    MindmapViewExtension,
    ConnectorViewExtension,
    GroupViewExtension,
    TextViewExtension,
    TemplateViewExtension,
    GfxLinkViewExtension,

    // Block
    AttachmentViewExtension,
    BookmarkViewExtension,
    CalloutViewExtension,
    CodeBlockViewExtension,
    DataViewViewExtension,
    DatabaseViewExtension,
    DividerViewExtension,
    EdgelessTextViewExtension,
    EmbedViewExtension,
    EmbedDocViewExtension,
    FrameViewExtension,
    ImageViewExtension,
    LatexViewExtension,
    ListViewExtension,
    NoteViewExtension,
    ParagraphViewExtension,
    SurfaceRefViewExtension,
    TableViewExtension,
    SurfaceViewExtension,
    RootViewExtension,

    // Inline
    InlineCommentViewExtension,
    FootnoteViewExtension,
    LinkViewExtension,
    ReferenceViewExtension,
    InlineLatexViewExtension,
    MentionViewExtension,
    InlinePresetViewExtension,

    // Widget
    // order will affect the z-index of the widget
    DragHandleViewExtension,
    EdgelessAutoConnectViewExtension,
    FrameTitleViewExtension,
    KeyboardToolbarViewExtension,
    LinkedDocViewExtension,
    RemoteSelectionViewExtension,
    ScrollAnchoringViewExtension,
    SlashMenuViewExtension,
    ToolbarViewExtension,
    ViewportOverlayViewExtension,
    EdgelessZoomToolbarViewExtension,
    PageDraggingAreaViewExtension,
    EdgelessSelectedRectViewExtension,
    EdgelessDraggingAreaViewExtension,
    NoteSlicerViewExtension,
    EdgelessToolbarViewExtension,

    // Fragment
    DocTitleViewExtension,
    FramePanelViewExtension,
    OutlineViewExtension,
    AdapterPanelViewExtension,
  ];
}
