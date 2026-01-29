// corresponding to `formatText` command
import { TableModelFlavour } from '@blocksuite/lovenotes-model';

export const FORMAT_TEXT_SUPPORT_FLAVOURS = [
  'lovenotes:paragraph',
  'lovenotes:list',
  'lovenotes:code',
];
// corresponding to `formatBlock` command
export const FORMAT_BLOCK_SUPPORT_FLAVOURS = [
  'lovenotes:paragraph',
  'lovenotes:list',
  'lovenotes:code',
];
// corresponding to `formatNative` command
export const FORMAT_NATIVE_SUPPORT_FLAVOURS = [
  'lovenotes:database',
  TableModelFlavour,
];
