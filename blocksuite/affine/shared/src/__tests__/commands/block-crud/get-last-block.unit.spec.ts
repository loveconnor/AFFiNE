/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from 'vitest';

import { getLastBlockCommand } from '../../../commands/block-crud/get-last-content-block';
import { lovenotes } from '../../../test-utils';

describe('commands/block-crud', () => {
  describe('getLastBlockCommand', () => {
    it('should return null when root is not exists', () => {
      const host = lovenotes`<lovenotes-page></lovenotes-page>`;

      const [_, { lastBlock }] = host.command.exec(getLastBlockCommand, {
        role: 'content',
        root: undefined,
      });

      expect(lastBlock).toBeNull();
    });

    it('should return last block with content role when found', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note id="note-1">
            <lovenotes-paragraph id="paragraph-1-1">First Paragraph</lovenotes-paragraph>
            <lovenotes-paragraph id="paragraph-1-2">Second Paragraph</lovenotes-paragraph>
          </lovenotes-note>
          <lovenotes-note id="note-2">
            <lovenotes-paragraph id="paragraph-2-1">First Paragraph</lovenotes-paragraph>
            <lovenotes-paragraph id="paragraph-2-2">Second Paragraph</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const [_, { lastBlock }] = host.command.exec(getLastBlockCommand, {
        role: 'hub',
        root: undefined,
      });

      expect(lastBlock?.id).toBe('note-2');
    });

    it('should return last block with any role in the array when found', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note id="note-1">
            <lovenotes-paragraph id="paragraph-1-1">First Paragraph</lovenotes-paragraph>
            <lovenotes-paragraph id="paragraph-1-2">Second Paragraph</lovenotes-paragraph>
          </lovenotes-note>
          <lovenotes-note id="note-2">
            <lovenotes-paragraph id="paragraph-2-1">First Paragraph</lovenotes-paragraph>
            <lovenotes-paragraph id="paragraph-2-2">Second Paragraph</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const [_, { lastBlock }] = host.command.exec(getLastBlockCommand, {
        role: ['hub', 'content'],
        root: undefined,
      });

      expect(lastBlock?.id).toBe('note-2');
    });

    it('should return last block with specified flavour when found', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note id="note-1">
            <lovenotes-paragraph id="paragraph-1">Paragraph</lovenotes-paragraph>
            <lovenotes-list id="list-1">List Item</lovenotes-list>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const note = host.store.getBlock('note-1')?.model;

      const [_, { lastBlock }] = host.command.exec(getLastBlockCommand, {
        flavour: 'lovenotes:list',
        root: note,
      });

      expect(lastBlock?.id).toBe('list-1');
    });

    it('should return last block with any flavour in the array when found', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note id="note-1">
            <lovenotes-paragraph id="paragraph-1">Paragraph</lovenotes-paragraph>
            <lovenotes-list id="list-1">List Item</lovenotes-list>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const note = host.store.getBlock('note-1')?.model;

      const [_, { lastBlock }] = host.command.exec(getLastBlockCommand, {
        flavour: ['lovenotes:list', 'lovenotes:code'],
        root: note,
      });

      expect(lastBlock?.id).toBe('list-1');
    });

    it('should return last block matching both role and flavour when both specified', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note id="note-1">
            <lovenotes-paragraph id="paragraph-1">Content Paragraph</lovenotes-paragraph>
            <lovenotes-list id="list-1">Content List</lovenotes-list>
            <lovenotes-paragraph id="paragraph-2">hub Paragraph</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const note = host.store.getBlock('note-1')?.model;
      const [_, { lastBlock }] = host.command.exec(getLastBlockCommand, {
        role: 'content',
        flavour: 'lovenotes:list',
        root: note,
      });

      expect(lastBlock?.id).toBe('list-1');
    });

    it('should return last block with default roles when role not specified', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note id="note-1">
            <lovenotes-paragraph id="paragraph-1">hub Paragraph</lovenotes-paragraph>
            <lovenotes-paragraph id="paragraph-2">Content Paragraph</lovenotes-paragraph>
            <lovenotes-paragraph id="paragraph-3">Hub Paragraph</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const [_, { lastBlock }] = host.command.exec(getLastBlockCommand, {
        root: undefined,
      });

      expect(lastBlock?.id).toBe('note-1');
    });

    it('should return last block with specified role when found', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note id="note-1">
            <lovenotes-paragraph id="paragraph-1">Content Paragraph</lovenotes-paragraph>
            <lovenotes-paragraph id="paragraph-2">hub Paragraph</lovenotes-paragraph>
            <lovenotes-database id="database-1">Database</lovenotes-database>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const note = host.store.getBlock('note-1')?.model;

      const [_, { lastBlock }] = host.command.exec(getLastBlockCommand, {
        role: 'hub',
        root: note,
      });

      expect(lastBlock?.id).toBe('database-1');
    });

    it('should return null when no blocks with specified role are found in children', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note id="note-1">
            <lovenotes-paragraph id="paragraph-1">Content Paragraph</lovenotes-paragraph>
            <lovenotes-paragraph id="paragraph-2">Another Content Paragraph</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const note = host.store.getBlock('note-1')?.model;

      const [_, { lastBlock }] = host.command.exec(getLastBlockCommand, {
        role: 'hub',
        root: note,
      });

      expect(lastBlock).toBeNull();
    });

    it('should return null when no blocks with specified flavour are found in children', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note id="note-1">
            <lovenotes-paragraph id="paragraph-1">Paragraph</lovenotes-paragraph>
            <lovenotes-paragraph id="paragraph-2">Another Paragraph</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const note = host.store.getBlock('note-1')?.model;

      const [_, { lastBlock }] = host.command.exec(getLastBlockCommand, {
        flavour: 'lovenotes:list',
        root: note,
      });

      expect(lastBlock).toBeNull();
    });

    it('should return last block with specified role within specified root subtree', () => {
      const host = lovenotes`
        <lovenotes-page>
          <lovenotes-note id="note-1">
            <lovenotes-paragraph id="paragraph-1-1">1-1 Content</lovenotes-paragraph>
            <lovenotes-paragraph id="paragraph-1-2">1-2 hub</lovenotes-paragraph>
          </lovenotes-note>
          <lovenotes-note id="note-2">
            <lovenotes-paragraph id="paragraph-2-1">2-1 hub</lovenotes-paragraph>
            <lovenotes-paragraph id="paragraph-2-2">2-2 Content</lovenotes-paragraph>
          </lovenotes-note>
        </lovenotes-page>
      `;

      const note = host.store.getBlock('note-2')?.model;

      const [_, { lastBlock }] = host.command.exec(getLastBlockCommand, {
        role: 'content',
        root: note,
      });

      expect(lastBlock?.id).toBe('paragraph-2-2');
    });
  });
});
