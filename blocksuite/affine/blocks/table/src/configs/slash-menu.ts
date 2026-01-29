import { getSelectedModelsCommand } from '@blocksuite/lovenotes-shared/commands';
import { TelemetryProvider } from '@blocksuite/lovenotes-shared/services';
import { isInsideBlockByFlavour } from '@blocksuite/lovenotes-shared/utils';
import type { SlashMenuConfig } from '@blocksuite/lovenotes-widget-slash-menu';
import { TableIcon } from '@blocksuite/icons/lit';

import { insertTableBlockCommand } from '../commands';
import { tableTooltip } from './tooltips';

export const tableSlashMenuConfig: SlashMenuConfig = {
  disableWhen: ({ model }) => model.flavour === 'lovenotes:table',
  items: [
    {
      name: 'Table',
      description: 'Create a simple table.',
      icon: TableIcon(),
      tooltip: {
        figure: tableTooltip,
        caption: 'Table',
      },
      group: '4_Content & Media@0',
      when: ({ model }) =>
        !isInsideBlockByFlavour(model.store, model, 'lovenotes:edgeless-text'),
      action: ({ std }) => {
        std.command
          .chain()
          .pipe(getSelectedModelsCommand)
          .pipe(insertTableBlockCommand, {
            place: 'after',
            removeEmptyLine: true,
          })
          .pipe(({ insertedTableBlockId }) => {
            if (insertedTableBlockId) {
              const telemetry = std.getOptional(TelemetryProvider);
              telemetry?.track('BlockCreated', {
                blockType: 'lovenotes:table',
              });
            }
          })
          .run();
      },
    },
  ],
};
