import { getWorkerUrl } from '@lovenotes/env/worker';
import { CodeLayoutHandlerExtension } from '@blocksuite/lovenotes/blocks/code';
import { ImageLayoutHandlerExtension } from '@blocksuite/lovenotes/blocks/image';
import { ListLayoutHandlerExtension } from '@blocksuite/lovenotes/blocks/list';
import { NoteLayoutHandlerExtension } from '@blocksuite/lovenotes/blocks/note';
import { ParagraphLayoutHandlerExtension } from '@blocksuite/lovenotes/blocks/paragraph';
import {
  TurboRendererConfigFactory,
  ViewportTurboRendererExtension,
} from '@blocksuite/lovenotes/gfx/turbo-renderer';

function createPainterWorker() {
  const worker = new Worker(getWorkerUrl('turbo-painter'));
  return worker;
}

export const turboRendererExtension = [
  ParagraphLayoutHandlerExtension,
  ListLayoutHandlerExtension,
  NoteLayoutHandlerExtension,
  CodeLayoutHandlerExtension,
  ImageLayoutHandlerExtension,
  TurboRendererConfigFactory({
    options: {
      zoomThreshold: 1,
      debounceTime: 1000,
    },
    painterWorkerEntry: createPainterWorker,
  }),
  ViewportTurboRendererExtension,
];
