import { SeniorToolExtension } from '@blocksuite/lovenotes-widget-edgeless-toolbar';
import { html } from 'lit';

export const templateSeniorTool = SeniorToolExtension(
  'template',
  ({ block }) => {
    return {
      name: 'Template',
      content: html`<edgeless-template-button .edgeless=${block}>
      </edgeless-template-button>`,
    };
  }
);
