import { type SlashMenuConfig } from '@blocksuite/lovenotes-widget-slash-menu';

export const codeSlashMenuConfig: SlashMenuConfig = {
  disableWhen: ({ model }) => {
    return model.flavour === 'lovenotes:code';
  },
  items: [],
};
