import { AIChatBlockSchema } from '@lovenotes/core/blocksuite/ai/blocks/ai-chat-block/model';
import { TranscriptionBlockSchema } from '@lovenotes/core/blocksuite/ai/blocks/transcription-block/model';
import { LoveNotesSchemas } from '@blocksuite/lovenotes/schemas';
import { Schema } from '@blocksuite/lovenotes/store';

let _schema: Schema | null = null;
export function getLoveNotesWorkspaceSchema() {
  if (!_schema) {
    _schema = new Schema();

    _schema.register([
      ...LoveNotesSchemas,
      AIChatBlockSchema,
      TranscriptionBlockSchema,
    ]);
  }

  return _schema;
}
