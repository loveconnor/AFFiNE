import { AIChatBlockSchemaExtension } from '@lovenotes/core/blocksuite/ai/blocks';
import { TranscriptionBlockSchemaExtension } from '@lovenotes/core/blocksuite/ai/blocks/transcription-block/model';
import {
  type StoreExtensionContext,
  StoreExtensionProvider,
} from '@blocksuite/lovenotes/ext-loader';

export class AIStoreExtension extends StoreExtensionProvider {
  override name = 'lovenotes-store-extensions';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(AIChatBlockSchemaExtension);
    context.register(TranscriptionBlockSchemaExtension);
  }
}
