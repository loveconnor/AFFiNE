import type { NoteBlockModel } from '@blocksuite/lovenotes-model';
import { BlockComponent } from '@blocksuite/std';
import { css, html } from 'lit';

export class NoteBlockComponent extends BlockComponent<NoteBlockModel> {
  static override styles = css`
    .lovenotes-note-block-container {
      display: flow-root;
    }
    .lovenotes-note-block-container.selected {
      background-color: var(--lovenotes-hover-color);
    }
  `;

  override connectedCallback() {
    super.connectedCallback();
  }

  override renderBlock() {
    return html`
      <div class="lovenotes-note-block-container">
        <div class="lovenotes-block-children-container">
          ${this.renderChildren(this.model)}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lovenotes-note': NoteBlockComponent;
  }
}
