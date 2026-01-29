import { AttachmentBlockModel } from '@blocksuite/lovenotes/model';
import type { BlockModel } from '@blocksuite/lovenotes/store';
import type { GfxModel } from '@blocksuite/std/gfx';

export function isAttachment(
  model: GfxModel | BlockModel
): model is AttachmentBlockModel {
  return model instanceof AttachmentBlockModel;
}
