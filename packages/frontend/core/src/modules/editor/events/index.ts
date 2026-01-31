import { createEvent } from '@lovenotes/infra';

import type { Editor } from '../entities/editor';

export const EditorInitialized = createEvent<Editor>('EditorInitialized');
