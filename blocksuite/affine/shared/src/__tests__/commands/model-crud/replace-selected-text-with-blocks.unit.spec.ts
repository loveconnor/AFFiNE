/**
 * @vitest-environment happy-dom
 */
import type { TextSelection } from '@blocksuite/std';
import { describe, expect, it } from 'vitest';

import { replaceSelectedTextWithBlocksCommand } from '../../../commands/model-crud/replace-selected-text-with-blocks';
import { lovenotes, block } from '../../../test-utils';

describe('commands/model-crud', () => {
  describe('replaceSelectedTextWithBlocksCommand', () => {
    it('should replace selected text with blocks when both first and last blocks are mergable blocks', () => {
      const host = lovenotes`
        <lovenotes-page id="page">
          <lovenotes-note id="note">
            <lovenotes-paragraph id="paragraph-1">Hel<anchor />lo</lovenotes-paragraph>
            <lovenotes-paragraph id="paragraph-2">Wor<focus />ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const blocks = [
        block`<lovenotes-paragraph id="111">111</lovenotes-paragraph>`,
        block`<lovenotes-code id="code"></lovenotes-code>`,
        block`<lovenotes-paragraph id="222">222</lovenotes-paragraph>`,
      ]
        .filter((b): b is NonNullable<typeof b> => b !== null)
        .map(b => b.model);

      const textSelection = host.selection.value[0] as TextSelection;

      host.command.exec(replaceSelectedTextWithBlocksCommand, {
        textSelection,
        blocks,
      });

      const expected = lovenotes`
        <lovenotes-page id="page">
          <lovenotes-note id="note">
            <lovenotes-paragraph id="paragraph-1">Hel111</lovenotes-paragraph>
            <lovenotes-code id="code"></lovenotes-code>
            <lovenotes-paragraph id="paragraph-2">222ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      expect(host.store).toEqualDoc(expected.store);
    });

    it('should replace selected text with blocks when both first and last blocks are mergable blocks in single paragraph', () => {
      const host = lovenotes`
        <lovenotes-page id="page">
          <lovenotes-note id="note">
            <lovenotes-paragraph id="paragraph-1">Hel<anchor></anchor>lo Wor<focus></focus>ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const blocks = [
        block`<lovenotes-paragraph id="111">111</lovenotes-paragraph>`,
        block`<lovenotes-code id="code"></lovenotes-code>`,
        block`<lovenotes-paragraph id="222">222</lovenotes-paragraph>`,
      ]
        .filter((b): b is NonNullable<typeof b> => b !== null)
        .map(b => b.model);

      const textSelection = host.selection.value[0] as TextSelection;

      host.command.exec(replaceSelectedTextWithBlocksCommand, {
        textSelection,
        blocks,
      });

      const expected = lovenotes`
        <lovenotes-page id="page">
          <lovenotes-note id="note">
            <lovenotes-paragraph id="paragraph-1">Hel111</lovenotes-paragraph>
            <lovenotes-code id="code"></lovenotes-code>
            <lovenotes-paragraph id="222">222ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      expect(host.store).toEqualDoc(expected.store);
    });

    it('should replace selected text with blocks when blocks contains only one mergable block', () => {
      const host = lovenotes`
        <lovenotes-page id="page">
          <lovenotes-note id="note">
            <lovenotes-paragraph id="paragraph-1">Hel<anchor />lo</lovenotes-paragraph>
            <lovenotes-paragraph id="paragraph-2">Wor<focus />ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const blocks = [block`<lovenotes-paragraph id="111">111</lovenotes-paragraph>`]
        .filter((b): b is NonNullable<typeof b> => b !== null)
        .map(b => b.model);

      const textSelection = host.selection.value[0] as TextSelection;

      host.command.exec(replaceSelectedTextWithBlocksCommand, {
        textSelection,
        blocks,
      });

      const expected = lovenotes`
        <lovenotes-page id="page">
          <lovenotes-note id="note">
            <lovenotes-paragraph id="paragraph-1">Hel111ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      expect(host.store).toEqualDoc(expected.store);
    });

    it('should replace selected text with blocks when blocks contains only one mergable block in single paragraph', () => {
      const host = lovenotes`
        <lovenotes-page id="page">
          <lovenotes-note id="note">
            <lovenotes-paragraph id="paragraph-1">Hel<anchor></anchor>lo Wor<focus></focus>ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const blocks = [block`<lovenotes-paragraph id="111">111</lovenotes-paragraph>`]
        .filter((b): b is NonNullable<typeof b> => b !== null)
        .map(b => b.model);

      const textSelection = host.selection.value[0] as TextSelection;

      host.command.exec(replaceSelectedTextWithBlocksCommand, {
        textSelection,
        blocks,
      });

      const expected = lovenotes`
        <lovenotes-page id="page">
          <lovenotes-note id="note">
            <lovenotes-paragraph id="paragraph-1">Hel111ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      expect(host.store).toEqualDoc(expected.store);
    });

    it('should replace selected text with blocks when only first block is mergable block', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note>
            <lovenotes-paragraph>Hel<anchor />lo</lovenotes-paragraph>
            <lovenotes-paragraph>Wor<focus />ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const blocks = [
        block`<lovenotes-paragraph>111</lovenotes-paragraph>`,
        block`<lovenotes-code></lovenotes-code>`,
        block`<lovenotes-code></lovenotes-code>`,
      ]
        .filter((b): b is NonNullable<typeof b> => b !== null)
        .map(b => b.model);

      const textSelection = host.selection.value[0] as TextSelection;

      host.command.exec(replaceSelectedTextWithBlocksCommand, {
        textSelection,
        blocks,
      });

      const expected = lovenotes`
        <lovenotes-page>
          <lovenotes-note >
            <lovenotes-paragraph>Hel111</lovenotes-paragraph>
            <lovenotes-code></lovenotes-code>
            <lovenotes-code></lovenotes-code>
            <lovenotes-paragraph>ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      expect(host.store).toEqualDoc(expected.store);
    });

    it('should replace selected text with blocks when only first block is mergable block in single paragraph', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note>
            <lovenotes-paragraph>Hel<anchor></anchor>lo Wor<focus></focus>ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const blocks = [
        block`<lovenotes-paragraph>111</lovenotes-paragraph>`,
        block`<lovenotes-code></lovenotes-code>`,
        block`<lovenotes-code></lovenotes-code>`,
      ]
        .filter((b): b is NonNullable<typeof b> => b !== null)
        .map(b => b.model);

      const textSelection = host.selection.value[0] as TextSelection;

      host.command.exec(replaceSelectedTextWithBlocksCommand, {
        textSelection,
        blocks,
      });

      const expected = lovenotes`
        <lovenotes-page>
          <lovenotes-note>
            <lovenotes-paragraph>Hel111</lovenotes-paragraph>
            <lovenotes-code></lovenotes-code>
            <lovenotes-code></lovenotes-code>
            <lovenotes-paragraph>ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      expect(host.store).toEqualDoc(expected.store);
    });

    it('should replace selected text with blocks when only last block is mergable block', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note>
            <lovenotes-paragraph>Hel<anchor />lo</lovenotes-paragraph>
            <lovenotes-paragraph>Wor<focus />ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const blocks = [
        block`<lovenotes-code></lovenotes-code>`,
        block`<lovenotes-code></lovenotes-code>`,
        block`<lovenotes-paragraph>111</lovenotes-paragraph>`,
      ]
        .filter((b): b is NonNullable<typeof b> => b !== null)
        .map(b => b.model);

      const textSelection = host.selection.value[0] as TextSelection;

      host.command.exec(replaceSelectedTextWithBlocksCommand, {
        textSelection,
        blocks,
      });

      const expected = lovenotes`
        <lovenotes-page>
          <lovenotes-note >
            <lovenotes-paragraph>Hel</lovenotes-paragraph>
            <lovenotes-code></lovenotes-code>
            <lovenotes-code></lovenotes-code>
            <lovenotes-paragraph>111ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;
      expect(host.store).toEqualDoc(expected.store);
    });

    it('should replace selected text with blocks when only last block is mergable block in single paragraph', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note>
            <lovenotes-paragraph>Hel<anchor></anchor>lo Wor<focus></focus>ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const blocks = [
        block`<lovenotes-code></lovenotes-code>`,
        block`<lovenotes-code></lovenotes-code>`,
        block`<lovenotes-paragraph>111</lovenotes-paragraph>`,
      ]
        .filter((b): b is NonNullable<typeof b> => b !== null)
        .map(b => b.model);

      const textSelection = host.selection.value[0] as TextSelection;

      host.command.exec(replaceSelectedTextWithBlocksCommand, {
        textSelection,
        blocks,
      });

      const expected = lovenotes`
        <lovenotes-page>
          <lovenotes-note>
            <lovenotes-paragraph>Hel</lovenotes-paragraph>
            <lovenotes-code></lovenotes-code>
            <lovenotes-code></lovenotes-code>
            <lovenotes-paragraph>111ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;
      expect(host.store).toEqualDoc(expected.store);
    });

    it('should replace selected text with blocks when neither first nor last block is mergable block', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note>
            <lovenotes-paragraph>Hel<anchor />lo</lovenotes-paragraph>
            <lovenotes-paragraph>Wor<focus />ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const blocks = [
        block`<lovenotes-code></lovenotes-code>`,
        block`<lovenotes-code></lovenotes-code>`,
      ]
        .filter((b): b is NonNullable<typeof b> => b !== null)
        .map(b => b.model);

      const textSelection = host.selection.value[0] as TextSelection;

      host.command.exec(replaceSelectedTextWithBlocksCommand, {
        textSelection,
        blocks,
      });

      const expected = lovenotes`
        <lovenotes-page>
          <lovenotes-note >
            <lovenotes-paragraph>Hel</lovenotes-paragraph>
            <lovenotes-code></lovenotes-code>
            <lovenotes-code></lovenotes-code>
            <lovenotes-paragraph>ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;
      expect(host.store).toEqualDoc(expected.store);
    });

    it('should replace selected text with blocks when neither first nor last block is mergable block in single paragraph', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note>
            <lovenotes-paragraph>Hel<anchor></anchor>lo Wor<focus></focus>ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const blocks = [
        block`<lovenotes-code></lovenotes-code>`,
        block`<lovenotes-code></lovenotes-code>`,
      ]
        .filter((b): b is NonNullable<typeof b> => b !== null)
        .map(b => b.model);

      const textSelection = host.selection.value[0] as TextSelection;

      host.command.exec(replaceSelectedTextWithBlocksCommand, {
        textSelection,
        blocks,
      });

      const expected = lovenotes`
        <lovenotes-page>
          <lovenotes-note>
            <lovenotes-paragraph>Hel</lovenotes-paragraph>
            <lovenotes-code></lovenotes-code>
            <lovenotes-code></lovenotes-code>
            <lovenotes-paragraph>ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;
      expect(host.store).toEqualDoc(expected.store);
    });

    it('should replace selected text with blocks when both first and last blocks are mergable blocks with different types', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note>
            <lovenotes-paragraph>Hel<anchor />lo</lovenotes-paragraph>
            <lovenotes-paragraph>Wor<focus />ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const blocks = [
        block`<lovenotes-list>1.</lovenotes-list>`,
        block`<lovenotes-list>2.</lovenotes-list>`,
      ]
        .filter((b): b is NonNullable<typeof b> => b !== null)
        .map(b => b.model);

      const textSelection = host.selection.value[0] as TextSelection;

      host.command.exec(replaceSelectedTextWithBlocksCommand, {
        textSelection,
        blocks,
      });

      const expected = lovenotes`
        <lovenotes-page>
          <lovenotes-note >
            <lovenotes-paragraph>Hel</lovenotes-paragraph>
            <lovenotes-list>1.</lovenotes-list>
            <lovenotes-list>2.</lovenotes-list>
            <lovenotes-paragraph>ld</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;
      expect(host.store).toEqualDoc(expected.store);
    });

    it('should replace selected text with blocks when both first and last blocks are paragraphs, and cursor is at the end of the text-block with different types', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note>
            <lovenotes-list>Hel<anchor />lo</lovenotes-list>
            <lovenotes-list>Wor<focus />ld</lovenotes-list>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const blocks = [
        block`<lovenotes-paragraph>111</lovenotes-paragraph>`,
        block`<lovenotes-paragraph>222</lovenotes-paragraph>`,
      ]
        .filter((b): b is NonNullable<typeof b> => b !== null)
        .map(b => b.model);

      const textSelection = host.selection.value[0] as TextSelection;

      host.command.exec(replaceSelectedTextWithBlocksCommand, {
        textSelection,
        blocks,
      });

      const expected = lovenotes`
        <lovenotes-page>
          <lovenotes-note >
            <lovenotes-list>Hel111</lovenotes-list>
            <lovenotes-list>222ld</lovenotes-list>
          </lovenotes-note>
        </lovenotes-page>
      `;
      expect(host.store).toEqualDoc(expected.store);
    });

    it('should replace selected text with blocks when first block is paragraph, and cursor is at the end of the text-block with different type  ', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note>
            <lovenotes-list>Hel<anchor />lo</lovenotes-list>
            <lovenotes-list>Wor<focus />ld</lovenotes-list>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const blocks = [
        block`<lovenotes-paragraph>111</lovenotes-paragraph>`,
        block`<lovenotes-code></lovenotes-code>`,
      ]
        .filter((b): b is NonNullable<typeof b> => b !== null)
        .map(b => b.model);

      const textSelection = host.selection.value[0] as TextSelection;

      host.command.exec(replaceSelectedTextWithBlocksCommand, {
        textSelection,
        blocks,
      });

      const expected = lovenotes`
        <lovenotes-page>
          <lovenotes-note >
            <lovenotes-list>Hel111</lovenotes-list>
            <lovenotes-code></lovenotes-code>
            <lovenotes-list>ld</lovenotes-list>
          </lovenotes-note>
        </lovenotes-page>
      `;
      expect(host.store).toEqualDoc(expected.store);
    });

    it('should replace selected text with blocks when last block is paragraph, and cursor is at the end of the text-block with different type  ', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note>
            <lovenotes-list>Hel<anchor />lo</lovenotes-list>
            <lovenotes-list>Wor<focus />ld</lovenotes-list>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const blocks = [
        block`<lovenotes-code></lovenotes-code>`,
        block`<lovenotes-paragraph>222</lovenotes-paragraph>`,
      ]
        .filter((b): b is NonNullable<typeof b> => b !== null)
        .map(b => b.model);

      const textSelection = host.selection.value[0] as TextSelection;

      host.command.exec(replaceSelectedTextWithBlocksCommand, {
        textSelection,
        blocks,
      });

      const expected = lovenotes`
        <lovenotes-page>
          <lovenotes-note >
            <lovenotes-list>Hel</lovenotes-list>
            <lovenotes-code></lovenotes-code>
            <lovenotes-list>222ld</lovenotes-list>
          </lovenotes-note>
        </lovenotes-page>
      `;
      expect(host.store).toEqualDoc(expected.store);
    });
  });
});
