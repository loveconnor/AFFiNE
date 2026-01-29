import { ViewExtensionManager } from '@blocksuite/lovenotes/ext-loader';
import { getInternalViewExtensions } from '@blocksuite/lovenotes/extensions/view';

const manager = new ViewExtensionManager(getInternalViewExtensions());

export function getTestViewManager() {
  return manager;
}
