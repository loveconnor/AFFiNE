import type * as Effect from '@blocksuite/lovenotes/effects';
import type { EditorHost } from '@blocksuite/lovenotes/std';
import type { Store, Transformer, Workspace } from '@blocksuite/lovenotes/store';
import type { TestLoveNotesEditorContainer } from '@blocksuite/integration-test';

declare type _GLOBAL_ = typeof Effect;

declare global {
  interface Window {
    /** Available on playground window
     * the following instance are initialized in `packages/playground/apps/starter/main.ts`
     */
    $blocksuite: {
      store: typeof import('@blocksuite/lovenotes/store');
      blocks: {
        database: typeof import('@blocksuite/lovenotes/blocks/database');
        note: typeof import('@blocksuite/lovenotes/blocks/note');
      };
      global: {
        utils: typeof import('@blocksuite/lovenotes/global/utils');
      };
      services: typeof import('@blocksuite/lovenotes/shared/services');
      editor: typeof import('@blocksuite/integration-test');
      blockStd: typeof import('@blocksuite/lovenotes/std');
      lovenotesModel: typeof import('@blocksuite/lovenotes-model');
    };
    collection: Workspace;
    doc: Store;
    editor: TestLoveNotesEditorContainer;
    host: EditorHost;
    job: Transformer;
  }
}
