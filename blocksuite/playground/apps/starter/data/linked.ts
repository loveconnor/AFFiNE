import { Text, type Workspace } from '@blocksuite/lovenotes/store';

import type { InitFn } from './utils.js';

export const linked: InitFn = (collection: Workspace, id: string) => {
  const docA =
    collection.getDoc(id)?.getStore({ id }) ??
    collection.createDoc(id).getStore({ id });

  const docBId = 'doc:linked-page';
  const docB = collection.createDoc(docBId).getStore();

  const docCId = 'doc:linked-edgeless';
  const docC = collection.createDoc(docCId).getStore();

  docA.doc.clear();
  docB.doc.clear();
  docC.doc.clear();

  docB.load(() => {
    const rootId = docB.addBlock('lovenotes:page', {
      title: new Text(''),
    });

    docB.addBlock('lovenotes:surface', {}, rootId);

    // Add note block inside root block
    const noteId = docB.addBlock('lovenotes:note', {}, rootId);
    // Add paragraph block inside note block
    docB.addBlock('lovenotes:paragraph', {}, noteId);
  });

  docC.load(() => {
    const rootId = docC.addBlock('lovenotes:page', {
      title: new Text(''),
    });

    docC.addBlock('lovenotes:surface', {}, rootId);

    // Add note block inside root block
    const noteId = docC.addBlock('lovenotes:note', {}, rootId);
    // Add paragraph block inside note block
    docC.addBlock('lovenotes:paragraph', {}, noteId);
  });

  docA.load();
  // Add root block and surface block at root level
  const rootId = docA.addBlock('lovenotes:page', {
    title: new Text('Doc A'),
  });

  docA.addBlock('lovenotes:surface', {}, rootId);

  // Add note block inside root block
  const noteId = docA.addBlock('lovenotes:note', {}, rootId);
  // Add paragraph block inside note block
  docA.addBlock('lovenotes:paragraph', {}, noteId);

  docA.addBlock('lovenotes:embed-linked-doc', { pageId: docBId }, noteId);

  docA.addBlock(
    'lovenotes:embed-linked-doc',
    { pageId: 'doc:deleted-example' },
    noteId
  );

  docA.addBlock('lovenotes:embed-linked-doc', { pageId: docCId }, noteId);

  docA.addBlock(
    'lovenotes:embed-linked-doc',
    { pageId: 'doc:deleted-example-edgeless' },
    noteId
  );

  docA.resetHistory();
  docB.resetHistory();
  docC.resetHistory();
};

linked.id = 'linked';
linked.displayName = 'Linked Doc Editor';
linked.description = 'A demo with linked docs';
