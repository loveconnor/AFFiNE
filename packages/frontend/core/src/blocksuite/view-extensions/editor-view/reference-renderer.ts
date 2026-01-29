import type { ReactToLit } from '@lovenotes/component';
import type { LoveNotesReference } from '@blocksuite/lovenotes/inlines/reference';
import { ReferenceNodeConfigExtension } from '@blocksuite/lovenotes/inlines/reference';
import type { ExtensionType } from '@blocksuite/lovenotes/store';

export type ReferenceReactRenderer = (
  reference: LoveNotesReference
) => React.ReactElement;

export function patchReferenceRenderer(
  reactToLit: ReactToLit,
  reactRenderer: ReferenceReactRenderer
): ExtensionType {
  const customContent = (reference: LoveNotesReference) => {
    const node = reactRenderer(reference);
    return reactToLit(node, true);
  };

  return ReferenceNodeConfigExtension({
    customContent,
    hidePopup: BUILD_CONFIG.isMobileEdition,
  });
}
