import {
  BlockModel,
  BlockSchemaExtension,
  defineBlockSchema,
} from '@blocksuite/lovenotes/store';

export const TranscriptionBlockFlavour = 'lovenotes:transcription';

const defaultProps: TranscriptionBlockProps = {
  transcription: {},
  jobId: undefined,
  createdBy: undefined, // the user id of the creator
};

export const TranscriptionBlockSchema = defineBlockSchema({
  flavour: TranscriptionBlockFlavour,
  props: () => defaultProps,
  metadata: {
    version: 1,
    role: 'attachment-viewer',
    parent: ['lovenotes:attachment'],
    children: ['lovenotes:callout'],
  },
  toModel: () => new TranscriptionBlockModel(),
});

export type TranscriptionBlockProps = {
  transcription: Record<string, any>;
  jobId?: string;
  createdBy?: string;
};

export class TranscriptionBlockModel extends BlockModel<TranscriptionBlockProps> {}

export const TranscriptionBlockSchemaExtension = BlockSchemaExtension(
  TranscriptionBlockSchema
);
