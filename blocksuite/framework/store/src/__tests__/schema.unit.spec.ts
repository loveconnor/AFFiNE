import { literal } from 'lit/static-html.js';
import { describe, expect, it, vi } from 'vitest';

import { BlockSchemaExtension } from '../extension/schema.js';
import { defineBlockSchema } from '../model/block/zod.js';
// import some blocks
import { SchemaValidateError } from '../schema/error.js';
import { createAutoIncrementIdGenerator } from '../test/index.js';
import { TestWorkspace } from '../test/test-workspace.js';
import {
  DividerBlockSchemaExtension,
  ListBlockSchemaExtension,
  NoteBlockSchemaExtension,
  ParagraphBlockSchemaExtension,
  RootBlockSchemaExtension,
} from './test-schema.js';

function createTestOptions() {
  const idGenerator = createAutoIncrementIdGenerator();
  return { id: 'test-collection', idGenerator };
}

const TestCustomNoteBlockSchema = defineBlockSchema({
  flavour: 'lovenotes:note-block-video',
  props: internal => ({
    text: internal.Text(),
  }),
  metadata: {
    version: 1,
    role: 'content',
    tag: literal`lovenotes-note-block-video`,
    parent: ['lovenotes:note'],
  },
});

const TestCustomNoteBlockSchemaExtension = BlockSchemaExtension(
  TestCustomNoteBlockSchema
);

const TestInvalidNoteBlockSchema = defineBlockSchema({
  flavour: 'lovenotes:note-invalid-block-video',
  props: internal => ({
    text: internal.Text(),
  }),
  metadata: {
    version: 1,
    role: 'content',
    tag: literal`lovenotes-invalid-note-block-video`,
    parent: ['lovenotes:note'],
  },
});

const TestInvalidNoteBlockSchemaExtension = BlockSchemaExtension(
  TestInvalidNoteBlockSchema
);

const TestRoleBlockSchema = defineBlockSchema({
  flavour: 'lovenotes:note-block-role-test',
  metadata: {
    version: 1,
    role: 'content',
    parent: ['lovenotes:note'],
    children: ['@test'],
  },
  props: internal => ({
    text: internal.Text(),
  }),
});

const TestRoleBlockSchemaExtension = BlockSchemaExtension(TestRoleBlockSchema);

const TestParagraphBlockSchema = defineBlockSchema({
  flavour: 'lovenotes:test-paragraph',
  metadata: {
    version: 1,
    role: 'test',
    parent: ['@content'],
  },
});

const TestParagraphBlockSchemaExtension = BlockSchemaExtension(
  TestParagraphBlockSchema
);

const extensions = [
  RootBlockSchemaExtension,
  ParagraphBlockSchemaExtension,
  ListBlockSchemaExtension,
  NoteBlockSchemaExtension,
  DividerBlockSchemaExtension,
  TestCustomNoteBlockSchemaExtension,
  TestInvalidNoteBlockSchemaExtension,
  TestRoleBlockSchemaExtension,
  TestParagraphBlockSchemaExtension,
];

const defaultDocId = 'doc0';
function createTestDoc(docId = defaultDocId) {
  const options = createTestOptions();
  const collection = new TestWorkspace(options);
  collection.meta.initialize();
  const doc = collection.createDoc(docId);
  doc.load();
  const store = doc.getStore({ extensions });
  return store;
}

describe('schema', () => {
  it('should be able to validate schema by role', () => {
    const consoleMock = vi
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);
    const doc = createTestDoc();
    const rootId = doc.addBlock('lovenotes:page', {});
    const noteId = doc.addBlock('lovenotes:note', {}, rootId);
    const paragraphId = doc.addBlock('lovenotes:paragraph', {}, noteId);

    doc.addBlock('lovenotes:note', {});
    expect(consoleMock.mock.calls[0]).toSatisfy((call: unknown[]) => {
      return typeof call[0] === 'string';
    });
    expect(consoleMock.mock.calls[1]).toSatisfy((call: unknown[]) => {
      return call[0] instanceof SchemaValidateError;
    });

    consoleMock.mockClear();
    // add paragraph to root should throw
    doc.addBlock('lovenotes:paragraph', {}, rootId);
    expect(consoleMock.mock.calls[0]).toSatisfy((call: unknown[]) => {
      return typeof call[0] === 'string';
    });
    expect(consoleMock.mock.calls[1]).toSatisfy((call: unknown[]) => {
      return call[0] instanceof SchemaValidateError;
    });

    consoleMock.mockClear();
    doc.addBlock('lovenotes:note', {}, rootId);
    doc.addBlock('lovenotes:paragraph', {}, noteId);
    doc.addBlock('lovenotes:paragraph', {}, paragraphId);
    expect(consoleMock).not.toBeCalled();
  });

  it('should glob match works', () => {
    const consoleMock = vi
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);
    const doc = createTestDoc();
    const rootId = doc.addBlock('lovenotes:page', {});
    const noteId = doc.addBlock('lovenotes:note', {}, rootId);

    doc.addBlock('lovenotes:note-block-video', {}, noteId);
    expect(consoleMock).not.toBeCalled();

    doc.addBlock('lovenotes:note-invalid-block-video', {}, noteId);
    expect(consoleMock.mock.calls[0]).toSatisfy((call: unknown[]) => {
      return typeof call[0] === 'string';
    });
    expect(consoleMock.mock.calls[1]).toSatisfy((call: unknown[]) => {
      return call[0] instanceof SchemaValidateError;
    });
  });

  it('should be able to validate schema by role', () => {
    const consoleMock = vi
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);
    const doc = createTestDoc();
    const rootId = doc.addBlock('lovenotes:page', {});
    const noteId = doc.addBlock('lovenotes:note', {}, rootId);
    const roleId = doc.addBlock('lovenotes:note-block-role-test', {}, noteId);

    doc.addBlock('lovenotes:paragraph', {}, roleId);
    doc.addBlock('lovenotes:paragraph', {}, roleId);

    expect(consoleMock.mock.calls[1]).toSatisfy((call: unknown[]) => {
      return call[0] instanceof SchemaValidateError;
    });

    consoleMock.mockClear();
    doc.addBlock('lovenotes:test-paragraph', {}, roleId);
    doc.addBlock('lovenotes:test-paragraph', {}, roleId);
    expect(consoleMock).not.toBeCalled();

    expect(doc.getBlocksByFlavour('lovenotes:test-paragraph')).toHaveLength(2);
  });
});
