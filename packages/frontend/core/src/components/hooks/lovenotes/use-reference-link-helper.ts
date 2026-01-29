import type { LoveNotesTextAttributes } from '@blocksuite/lovenotes/shared/types';
import {
  type DeltaInsert,
  Text,
  type Workspace,
} from '@blocksuite/lovenotes/store';
import { useCallback } from 'react';

export function useReferenceLinkHelper(docCollection: Workspace) {
  const addReferenceLink = useCallback(
    (pageId: string, referenceId: string) => {
      const page = docCollection?.getDoc(pageId)?.getStore();
      if (!page) {
        return;
      }
      const text = new Text([
        {
          insert: ' ',
          attributes: {
            reference: {
              type: 'Subpage',
              pageId: referenceId,
            },
          },
        },
      ] as DeltaInsert<LoveNotesTextAttributes>[]);
      const [frame] = page.getModelsByFlavour('lovenotes:note');

      frame && page.addBlock('lovenotes:paragraph', { text }, frame.id);
    },
    [docCollection]
  );

  return {
    addReferenceLink,
  };
}
