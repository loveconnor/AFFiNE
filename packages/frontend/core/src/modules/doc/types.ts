import type { DocProps } from '@lovenotes/core/blocksuite/initialization';
import type { DocMode } from '@blocksuite/lovenotes/model';

export interface DocCreateOptions {
  id?: string;
  title?: string;
  primaryMode?: DocMode;
  skipInit?: boolean;
  docProps?: DocProps;
  isTemplate?: boolean;
}
