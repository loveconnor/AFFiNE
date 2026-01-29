import { registerAIEditorEffects } from '@lovenotes/core/blocksuite/ai/effects/editor';
import { editorEffects } from '@lovenotes/core/blocksuite/editors';

import { registerTemplates } from './register-templates';

editorEffects();
registerAIEditorEffects();
registerTemplates();

export * from './blocksuite-editor';
