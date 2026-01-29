import type { IconData } from '@blocksuite/lovenotes-shared/services';
import {
  BlockModel,
  BlockSchemaExtension,
  defineBlockSchema,
  type Text,
} from '@blocksuite/store';

import type { BlockMeta } from '../../utils/types';

export type CalloutProps = {
  icon?: IconData;
  text: Text;
  backgroundColorName?: string;
} & BlockMeta;

export const CalloutBlockSchema = defineBlockSchema({
  flavour: 'lovenotes:callout',
  props: (internal): CalloutProps => ({
    icon: { type: 'emoji', unicode: '💡' } as IconData,
    text: internal.Text(),
    backgroundColorName: 'grey',
    'meta:createdAt': undefined,
    'meta:updatedAt': undefined,
    'meta:createdBy': undefined,
    'meta:updatedBy': undefined,
  }),
  metadata: {
    version: 1,
    role: 'hub',
    parent: [
      'lovenotes:note',
      'lovenotes:database',
      'lovenotes:paragraph',
      'lovenotes:list',
      'lovenotes:edgeless-text',
      'lovenotes:transcription',
    ],
    children: ['lovenotes:paragraph', 'lovenotes:list'],
  },
  toModel: () => new CalloutBlockModel(),
});

export class CalloutBlockModel extends BlockModel<CalloutProps> {}

export const CalloutBlockSchemaExtension =
  BlockSchemaExtension(CalloutBlockSchema);
