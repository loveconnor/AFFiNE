import {
  EDGELESS_DND_PREVIEW_ELEMENT,
  EdgelessDndPreviewElement,
} from './components/edgeless-preview/preview';
import { AFFINE_DRAG_HANDLE_WIDGET } from './consts';
import { LoveNotesDragHandleWidget } from './drag-handle';

export function effects() {
  customElements.define(AFFINE_DRAG_HANDLE_WIDGET, LoveNotesDragHandleWidget);
  customElements.define(
    EDGELESS_DND_PREVIEW_ELEMENT,
    EdgelessDndPreviewElement
  );
}
