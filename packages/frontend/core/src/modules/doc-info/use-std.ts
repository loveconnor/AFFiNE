import { getViewManager } from '@lovenotes/core/blocksuite/manager/view';
import { DebugLogger } from '@lovenotes/debug';
import { BlockStdScope } from '@blocksuite/lovenotes/std';
import type { Store } from '@blocksuite/lovenotes/store';
import { useMemo } from 'react';

const logger = new DebugLogger('doc-info');
// todo(pengx17): use rc pool?
export function createBlockStdScope(doc: Store) {
  logger.debug('createBlockStdScope', doc.id);
  const std = new BlockStdScope({
    store: doc,
    extensions: getViewManager().config.init().value.get('page'),
  });
  return std;
}

export function useBlockStdScope(doc: Store) {
  return useMemo(() => createBlockStdScope(doc), [doc]);
}
