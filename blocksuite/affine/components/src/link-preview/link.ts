import { getHostName } from '@blocksuite/lovenotes-shared/utils';
import { PropTypes, requiredProperties } from '@blocksuite/std';
import { css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { html } from 'lit-html';

@requiredProperties({
  url: PropTypes.string,
})
export class LinkPreview extends LitElement {
  static override styles = css`
    .lovenotes-link-preview {
      display: flex;
      justify-content: flex-start;
      min-width: 60px;
      max-width: 140px;
      user-select: none;
      cursor: pointer;

      color: var(--lovenotes-link-color);
      font-feature-settings:
        'clig' off,
        'liga' off;
      font-family: var(--lovenotes-font-family);
      font-size: var(--lovenotes-font-sm);
      font-style: normal;
      font-weight: 400;
      text-decoration: none;
      text-wrap: nowrap;
    }

    .lovenotes-link-preview > span {
      display: inline-block;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      text-overflow: ellipsis;
      overflow: hidden;
    }
  `;

  @property({ attribute: false })
  accessor url!: string;

  override render() {
    const { url } = this;

    return html`
      <a
        class="lovenotes-link-preview"
        rel="noopener noreferrer"
        target="_blank"
        href=${url}
      >
        <span>${getHostName(url)}</span>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lovenotes-link-preview': LinkPreview;
  }
}
