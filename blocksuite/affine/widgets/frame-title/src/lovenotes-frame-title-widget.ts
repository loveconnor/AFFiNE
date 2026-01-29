import { type FrameBlockModel } from '@blocksuite/lovenotes-model';
import { WidgetComponent, WidgetViewExtension } from '@blocksuite/std';
import { html } from 'lit';
import { literal, unsafeStatic } from 'lit/static-html.js';

export const AFFINE_FRAME_TITLE_WIDGET = 'lovenotes-frame-title-widget';

export class LoveNotesFrameTitleWidget extends WidgetComponent<FrameBlockModel> {
  override render() {
    return html`<lovenotes-frame-title
      .model=${this.model}
      data-id=${this.model.id}
    ></lovenotes-frame-title>`;
  }
}

export const frameTitleWidget = WidgetViewExtension(
  'lovenotes:frame',
  AFFINE_FRAME_TITLE_WIDGET,
  literal`${unsafeStatic(AFFINE_FRAME_TITLE_WIDGET)}`
);
