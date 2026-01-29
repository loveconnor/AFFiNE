import type { RootBlockModel } from '@blocksuite/lovenotes/model';
import { BlockComponent } from '@blocksuite/lovenotes/std';
import { html } from 'lit';

export class MindmapRootBlock extends BlockComponent<RootBlockModel> {
  override render() {
    return html`
      <style>
        .lovenotes-mini-mindmap-root {
          display: block;
          width: 100%;
          height: 100%;

          background-size: 20px 20px;
          background-color: var(--lovenotes-background-primary-color);
          background-image: radial-gradient(
            var(--lovenotes-edgeless-grid-color) 1px,
            var(--lovenotes-background-primary-color) 1px
          );
        }
      </style>
      <div class="lovenotes-mini-mindmap-root">
        ${this.host.renderChildren(this.model)}
      </div>
    `;
  }
}
