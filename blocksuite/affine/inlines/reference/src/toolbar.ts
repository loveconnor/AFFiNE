import { ToolbarModuleExtension } from '@blocksuite/lovenotes-shared/services';
import { BlockFlavourIdentifier } from '@blocksuite/std';

import { builtinInlineReferenceToolbarConfig } from './reference-node/configs/toolbar';

export const referenceNodeToolbar = ToolbarModuleExtension({
  id: BlockFlavourIdentifier('lovenotes:reference'),
  config: builtinInlineReferenceToolbarConfig,
});
