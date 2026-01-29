import { BlockSchemaExtension } from '../extension/schema.js';
import { BlockModel, defineBlockSchema } from '../model/index.js';

export const RootBlockSchema = defineBlockSchema({
  flavour: 'lovenotes:page',
  props: internal => ({
    title: internal.Text(),
    count: 0,
    style: {} as Record<string, unknown>,
    items: [] as unknown[],
  }),
  metadata: {
    version: 2,
    role: 'root',
  },
});

export const RootBlockSchemaExtension = BlockSchemaExtension(RootBlockSchema);

export class RootBlockModel extends BlockModel<
  ReturnType<(typeof RootBlockSchema)['model']['props']>
> {}

export const NoteBlockSchema = defineBlockSchema({
  flavour: 'lovenotes:note',
  props: () => ({}),
  metadata: {
    version: 1,
    role: 'hub',
    parent: ['lovenotes:page'],
    children: [
      'lovenotes:paragraph',
      'lovenotes:list',
      'lovenotes:code',
      'lovenotes:divider',
      'lovenotes:database',
      'lovenotes:data-view',
      'lovenotes:image',
      'lovenotes:note-block-*',
      'lovenotes:bookmark',
      'lovenotes:attachment',
      'lovenotes:surface-ref',
      'lovenotes:embed-*',
    ],
  },
});

export const NoteBlockSchemaExtension = BlockSchemaExtension(NoteBlockSchema);

export const ParagraphBlockSchema = defineBlockSchema({
  flavour: 'lovenotes:paragraph',
  props: internal => ({
    type: 'text',
    text: internal.Text(),
  }),
  metadata: {
    version: 1,
    role: 'content',
    parent: [
      'lovenotes:note',
      'lovenotes:database',
      'lovenotes:paragraph',
      'lovenotes:list',
    ],
  },
});

export const ParagraphBlockSchemaExtension =
  BlockSchemaExtension(ParagraphBlockSchema);

export const ListBlockSchema = defineBlockSchema({
  flavour: 'lovenotes:list',
  props: internal => ({
    type: 'bulleted',
    text: internal.Text(),
    checked: false,
    collapsed: false,
  }),
  metadata: {
    version: 1,
    role: 'content',
    parent: [
      'lovenotes:note',
      'lovenotes:database',
      'lovenotes:list',
      'lovenotes:paragraph',
    ],
  },
});

export const ListBlockSchemaExtension = BlockSchemaExtension(ListBlockSchema);

export const DividerBlockSchema = defineBlockSchema({
  flavour: 'lovenotes:divider',
  metadata: {
    version: 1,
    role: 'content',
    children: [],
  },
});

export const DividerBlockSchemaExtension =
  BlockSchemaExtension(DividerBlockSchema);
