import type { FrameBlockModel } from '@blocksuite/lovenotes/model';
import type { Store } from '@blocksuite/lovenotes/store';

export function getFrameBlock(doc: Store) {
  const blocks = doc.getBlocksByFlavour('lovenotes:frame');
  return blocks.length !== 0 ? (blocks[0].model as FrameBlockModel) : null;
}
