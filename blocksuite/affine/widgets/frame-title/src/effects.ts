import {
  AFFINE_FRAME_TITLE_WIDGET,
  LoveNotesFrameTitleWidget,
} from './lovenotes-frame-title-widget.js';
import { EdgelessFrameTitleEditor } from './edgeless-frame-title-editor.js';
import { AFFINE_FRAME_TITLE, LoveNotesFrameTitle } from './frame-title.js';

export function effects() {
  customElements.define(AFFINE_FRAME_TITLE_WIDGET, LoveNotesFrameTitleWidget);
  customElements.define(AFFINE_FRAME_TITLE, LoveNotesFrameTitle);
  customElements.define(
    'edgeless-frame-title-editor',
    EdgelessFrameTitleEditor
  );
}
