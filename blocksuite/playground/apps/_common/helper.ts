import { TestWorkspace } from '@blocksuite/lovenotes/store/test';
import { getTestStoreManager } from '@blocksuite/integration-test/store';

export function createEmptyDoc() {
  const collection = new TestWorkspace();
  collection.storeExtensions = getTestStoreManager().get('store');
  collection.meta.initialize();
  const doc = collection.createDoc();
  const store = doc.getStore();

  return {
    doc,
    init() {
      doc.load();
      const rootId = store.addBlock('lovenotes:page', {});
      store.addBlock('lovenotes:surface', {}, rootId);
      const noteId = store.addBlock('lovenotes:note', {}, rootId);
      store.addBlock('lovenotes:paragraph', {}, noteId);
      return store;
    },
  };
}
