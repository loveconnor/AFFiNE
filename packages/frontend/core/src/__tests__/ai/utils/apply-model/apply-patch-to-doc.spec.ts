/**
 * @vitest-environment happy-dom
 */
import '@blocksuite/lovenotes-shared/test-utils';

import { getInternalStoreExtensions } from '@blocksuite/lovenotes/extensions/store';
import { StoreExtensionManager } from '@blocksuite/lovenotes-ext-loader';
import { createLoveNotesTemplate } from '@blocksuite/lovenotes-shared/test-utils';
import type { Store } from '@blocksuite/store';
import { describe, expect, it } from 'vitest';

import { applyPatchToDoc } from '../../../../blocksuite/ai/utils/apply-model/apply-patch-to-doc';
import type { PatchOp } from '../../../../blocksuite/ai/utils/apply-model/markdown-diff';

declare module 'vitest' {
  interface Assertion<T = any> {
    toEqualDoc(expected: Store, options?: { compareId?: boolean }): T;
  }
}

const manager = new StoreExtensionManager(getInternalStoreExtensions());
const { lovenotes } = createLoveNotesTemplate(manager.get('store'));

describe('applyPatchToDoc', () => {
  it('should delete a block', async () => {
    const host = lovenotes`
    <lovenotes-page id="page">
      <lovenotes-note id="note">
        <lovenotes-paragraph id="paragraph-1">Hello</lovenotes-paragraph>
        <lovenotes-paragraph id="paragraph-2">World</lovenotes-paragraph>
      </lovenotes-note>
    </lovenotes-page>
  `;

    const patch: PatchOp[] = [{ op: 'delete', id: 'paragraph-1' }];
    await applyPatchToDoc(host.store, patch);

    const expected = lovenotes`
      <lovenotes-page id="page">
        <lovenotes-note id="note">
          <lovenotes-paragraph id="paragraph-2">World</lovenotes-paragraph>
        </lovenotes-note>
      </lovenotes-page>
    `;

    expect(host.store).toEqualDoc(expected.store, {
      compareId: true,
    });
  });

  // FIXME: markdown parse error in test mode
  it.skip('should replace a block', async () => {
    const host = lovenotes`
    <lovenotes-page id="page">
      <lovenotes-note id="note">
        <lovenotes-paragraph id="paragraph-1">Hello</lovenotes-paragraph>
        <lovenotes-paragraph id="paragraph-2">World</lovenotes-paragraph>
      </lovenotes-note>
    </lovenotes-page>
  `;

    const patch: PatchOp[] = [
      {
        op: 'replace',
        id: 'paragraph-1',
        content: 'New content',
      },
    ];

    await applyPatchToDoc(host.store, patch);

    const expected = lovenotes`
      <lovenotes-page id="page">
        <lovenotes-note id="note">
          <lovenotes-paragraph id="paragraph-1">New content</lovenotes-paragraph>
          <lovenotes-paragraph id="paragraph-2">World</lovenotes-paragraph>
        </lovenotes-note>
      </lovenotes-page>
    `;

    expect(host.store).toEqualDoc(expected.store, {
      compareId: true,
    });
  });

  // FIXME: markdown parse error in test mode
  it.skip('should insert a block at index', async () => {
    const host = lovenotes`
    <lovenotes-page id="page">
      <lovenotes-note id="note">
        <lovenotes-paragraph id="paragraph-1">Hello</lovenotes-paragraph>
        <lovenotes-paragraph id="paragraph-2">World</lovenotes-paragraph>
      </lovenotes-note>
    </lovenotes-page>
  `;

    const patch: PatchOp[] = [
      {
        op: 'insert',
        index: 2,
        after: 'paragraph-1',
        block: {
          id: 'paragraph-3',
          type: 'lovenotes:paragraph',
          content: 'Inserted',
        },
      },
    ];

    await applyPatchToDoc(host.store, patch);

    const expected = lovenotes`
      <lovenotes-page id="page">
        <lovenotes-note id="note">
          <lovenotes-paragraph id="paragraph-1">Hello</lovenotes-paragraph>
          <lovenotes-paragraph id="paragraph-2">World</lovenotes-paragraph>
          <lovenotes-paragraph id="paragraph-3">Inserted</lovenotes-paragraph>
        </lovenotes-note>
      </lovenotes-page>
    `;

    expect(host.store).toEqualDoc(expected.store, {
      compareId: true,
    });
  });
});
