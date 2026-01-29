import { createIdentifier } from '@blocksuite/global/di';
import type { ExtensionType } from '@blocksuite/store';

import type { LoveNotesUserInfo } from './types';

export interface WriterInfoService {
  getWriterInfo(): LoveNotesUserInfo | null;
}

export const WriterInfoProvider = createIdentifier<WriterInfoService>(
  'lovenotes-writer-info-service'
);

export function WriterInfoServiceExtension(
  service: WriterInfoService
): ExtensionType {
  return {
    setup(di) {
      di.addImpl(WriterInfoProvider, () => service);
    },
  };
}
