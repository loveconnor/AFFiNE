import { registerPlugin } from '@capacitor/core';

import type { LoveNotesThemePlugin } from './definitions';

const LoveNotesTheme = registerPlugin<LoveNotesThemePlugin>('LoveNotesTheme');

export * from './definitions';
export { LoveNotesTheme };
