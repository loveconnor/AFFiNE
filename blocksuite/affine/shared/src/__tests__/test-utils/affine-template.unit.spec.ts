import { TextSelection } from '@blocksuite/std';
import { describe, expect, it } from 'vitest';

import { lovenotes } from '../../test-utils';

describe('helpers/lovenotes-template', () => {
  it('should create a basic document structure from template', () => {
    const host = lovenotes`
      <lovenotes-page id="page">
        <lovenotes-note id="note">
          <lovenotes-paragraph id="paragraph-1">Hello, world</lovenotes-paragraph>
        </lovenotes-note>
      </lovenotes-page>
    `;

    expect(host.store).toBeDefined();

    const pageBlock = host.store.getBlock('page');
    expect(pageBlock).toBeDefined();
    expect(pageBlock?.flavour).toBe('lovenotes:page');

    const noteBlock = host.store.getBlock('note');
    expect(noteBlock).toBeDefined();
    expect(noteBlock?.flavour).toBe('lovenotes:note');

    const paragraphBlock = host.store.getBlock('paragraph-1');
    expect(paragraphBlock).toBeDefined();
    expect(paragraphBlock?.flavour).toBe('lovenotes:paragraph');
  });

  it('should handle nested blocks correctly', () => {
    const host = lovenotes`
      <lovenotes-page>
        <lovenotes-note>
          <lovenotes-paragraph>First paragraph</lovenotes-paragraph>
          <lovenotes-list>List item</lovenotes-list>
          <lovenotes-paragraph>Second paragraph</lovenotes-paragraph>
        </lovenotes-note>
      </lovenotes-page>
    `;

    const noteBlocks = host.store.getBlocksByFlavour('lovenotes:note');
    const paragraphBlocks = host.store.getBlocksByFlavour('lovenotes:paragraph');
    const listBlocks = host.store.getBlocksByFlavour('lovenotes:list');

    expect(noteBlocks.length).toBe(1);
    expect(paragraphBlocks.length).toBe(2);
    expect(listBlocks.length).toBe(1);

    const noteBlock = noteBlocks[0];
    const noteChildren =
      host.store.getBlock(noteBlock.id)?.model.children || [];
    expect(noteChildren.length).toBe(3);

    expect(noteChildren[0].flavour).toBe('lovenotes:paragraph');
    expect(noteChildren[1].flavour).toBe('lovenotes:list');
    expect(noteChildren[2].flavour).toBe('lovenotes:paragraph');
  });

  it('should handle empty blocks correctly', () => {
    const host = lovenotes`
      <lovenotes-page>
        <lovenotes-note>
          <lovenotes-paragraph></lovenotes-paragraph>
        </lovenotes-note>
      </lovenotes-page>
    `;

    const paragraphBlocks = host.store.getBlocksByFlavour('lovenotes:paragraph');
    expect(paragraphBlocks.length).toBe(1);

    const paragraphBlock = host.store.getBlock(paragraphBlocks[0].id);
    const paragraphText = paragraphBlock?.model.text?.toString() || '';
    expect(paragraphText).toBe('');
  });

  it('should throw error on invalid template', () => {
    expect(() => {
      lovenotes`
        <unknown-tag></unknown-tag>
      `;
    }).toThrow();
  });

  it('should handle text selection with anchor and focus', () => {
    const host = lovenotes`
      <lovenotes-page id="page">
        <lovenotes-note id="note">
          <lovenotes-paragraph id="paragraph-1">Hel<anchor />lo</lovenotes-paragraph>
          <lovenotes-paragraph id="paragraph-2">Wo<focus />rld</lovenotes-paragraph>
        </lovenotes-note>
      </lovenotes-page>
    `;

    const selection = host.selection.value[0] as TextSelection;
    expect(selection).toBeDefined();
    expect(selection.is(TextSelection)).toBe(true);
    expect(selection.from.blockId).toBe('paragraph-1');
    expect(selection.from.index).toBe(3);
    expect(selection.from.length).toBe(2);
    expect(selection.to?.blockId).toBe('paragraph-2');
    expect(selection.to?.index).toBe(0);
    expect(selection.to?.length).toBe(2);
  });

  it('should handle cursor position', () => {
    const host = lovenotes`
      <lovenotes-page id="page">
        <lovenotes-note id="note">
          <lovenotes-paragraph id="paragraph-1">Hello<cursor />World</lovenotes-paragraph>
        </lovenotes-note>
      </lovenotes-page>
    `;

    const selection = host.selection.value[0] as TextSelection;
    expect(selection).toBeDefined();
    expect(selection.is(TextSelection)).toBe(true);
    expect(selection.from.blockId).toBe('paragraph-1');
    expect(selection.from.index).toBe(5);
    expect(selection.from.length).toBe(0);
    expect(selection.to).toBeNull();
  });

  it('should handle selection in empty blocks', () => {
    const host = lovenotes`
      <lovenotes-page id="page">
        <lovenotes-note id="note">
          <lovenotes-paragraph id="paragraph-1"><cursor /></lovenotes-paragraph>
        </lovenotes-note>
      </lovenotes-page>
    `;

    const selection = host.selection.value[0] as TextSelection;
    expect(selection).toBeDefined();
    expect(selection.is(TextSelection)).toBe(true);
    expect(selection.from.blockId).toBe('paragraph-1');
    expect(selection.from.index).toBe(0);
    expect(selection.from.length).toBe(0);
    expect(selection.to).toBeNull();
  });

  it('should handle single point selection', () => {
    const host = lovenotes`
      <lovenotes-page id="page">
        <lovenotes-note id="note">
          <lovenotes-paragraph id="paragraph-1">Hello<anchor></anchor>World<focus></focus>LoveNotes</lovenotes-paragraph>
        </lovenotes-note>
      </lovenotes-page>
    `;

    const selection = host.selection.value[0] as TextSelection;
    expect(selection).toBeDefined();
    expect(selection.is(TextSelection)).toBe(true);
    expect(selection.from.blockId).toBe('paragraph-1');
    expect(selection.from.index).toBe(5);
    expect(selection.from.length).toBe(5);
    expect(selection.to).toBeNull();
  });
});
