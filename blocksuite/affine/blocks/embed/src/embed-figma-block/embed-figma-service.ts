import {
  EmbedFigmaBlockSchema,
  EmbedFigmaStyles,
} from '@blocksuite/lovenotes-model';
import { EmbedOptionConfig } from '@blocksuite/lovenotes-shared/services';

import { figmaUrlRegex } from './embed-figma-model.js';

export const EmbedFigmaBlockOptionConfig = EmbedOptionConfig({
  flavour: EmbedFigmaBlockSchema.model.flavour,
  urlRegex: figmaUrlRegex,
  styles: EmbedFigmaStyles,
  viewType: 'embed',
});
