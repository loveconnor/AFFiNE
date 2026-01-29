import { SeniorToolExtension } from '@blocksuite/lovenotes-widget-edgeless-toolbar';
import { html } from 'lit';

export const noteSeniorTool = SeniorToolExtension('note', ({ block }) => {
  return {
    name: 'Note',
    content: html`<edgeless-note-senior-button
      .edgeless=${block}
    ></edgeless-note-senior-button>`,
  };
});
