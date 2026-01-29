import { StoreExtensionManager } from '@blocksuite/lovenotes/ext-loader';
import { getInternalStoreExtensions } from '@blocksuite/lovenotes/extensions/store';

const manager = new StoreExtensionManager(getInternalStoreExtensions());

export function getTestStoreManager() {
  return manager;
}
