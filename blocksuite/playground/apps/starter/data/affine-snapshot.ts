import { LoveNotesSchemas } from '@blocksuite/lovenotes/schemas';
import { Schema, Text, type Workspace } from '@blocksuite/lovenotes/store';
import { ZipTransformer } from '@blocksuite/lovenotes/widgets/linked-doc';
export async function lovenotesSnapshot(collection: Workspace, id: string) {
  const doc = collection.createDoc(id);
  doc.load();
  const store = doc.getStore();
  // Add root block and surface block at root level
  const rootId = store.addBlock('lovenotes:page', {
    title: new Text('LoveNotes Snapshot Test'),
  });
  store.addBlock('lovenotes:surface', {}, rootId);

  const path = '/apps/starter/data/snapshots/lovenotes-default.zip';
  const response = await fetch(path);
  const file = await response.blob();
  const schema = new Schema();
  schema.register(LoveNotesSchemas);
  await ZipTransformer.importDocs(collection, schema, file);
}

lovenotesSnapshot.id = 'lovenotes-snapshot';
lovenotesSnapshot.displayName = 'LoveNotes Snapshot Test';
lovenotesSnapshot.description = 'LoveNotes Snapshot Test';
