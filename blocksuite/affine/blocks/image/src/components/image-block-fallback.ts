import type { ResolvedStateInfo } from '@blocksuite/lovenotes-components/resource';
import { unsafeCSSVarV2 } from '@blocksuite/lovenotes-shared/theme';
import { WithDisposable } from '@blocksuite/global/lit';
import { ShadowlessElement } from '@blocksuite/std';
import { css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export const SURFACE_IMAGE_CARD_WIDTH = 220;
export const SURFACE_IMAGE_CARD_HEIGHT = 122;
export const NOTE_IMAGE_CARD_WIDTH = 752;
export const NOTE_IMAGE_CARD_HEIGHT = 78;

export class ImageBlockFallbackCard extends WithDisposable(ShadowlessElement) {
  static override styles = css`
    lovenotes-image-fallback-card {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
    }

    .lovenotes-image-fallback-card {
      display: flex;
      flex: 1;
      gap: 8px;
      align-self: stretch;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 8px;
      border: 1px solid ${unsafeCSSVarV2('layer/background/tertiary')};
      background: ${unsafeCSSVarV2('layer/background/secondary')};
      padding: 12px;
    }

    .truncate {
      align-self: stretch;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .lovenotes-image-fallback-card-title {
      display: flex;
      flex-direction: row;
      gap: 8px;
      align-items: center;
      align-self: stretch;
    }

    .lovenotes-image-fallback-card-title-icon {
      display: flex;
      width: 16px;
      height: 16px;
      align-items: center;
      justify-content: center;
      color: var(--lovenotes-text-primary-color);
    }

    .lovenotes-image-fallback-card-title-text {
      color: var(--lovenotes-placeholder-color);
      font-family: var(--lovenotes-font-family);
      font-size: var(--lovenotes-font-sm);
      font-style: normal;
      font-weight: 600;
      line-height: 22px;
    }

    .lovenotes-image-fallback-card-description {
      color: var(--lovenotes-text-secondary-color);
      font-family: var(--lovenotes-font-family);
      font-size: var(--lovenotes-font-xs);
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }

    .lovenotes-image-fallback-card.loading {
      .lovenotes-image-fallback-card-title {
        color: var(--lovenotes-placeholder-color);
      }
    }

    .lovenotes-image-fallback-card.error {
      .lovenotes-image-fallback-card-title-icon {
        color: ${unsafeCSSVarV2('status/error')};
      }
    }
  `;

  override render() {
    const { icon, title, description, loading, error } = this.state;

    const classInfo = {
      'lovenotes-image-fallback-card': true,
      'drag-target': true,
      loading,
      error,
    };

    return html`
      <div class=${classMap(classInfo)}>
        <div class="lovenotes-image-fallback-card-title">
          <div class="lovenotes-image-fallback-card-title-icon">${icon}</div>
          <div class="lovenotes-image-fallback-card-title-text truncate">
            ${title}
          </div>
        </div>
        <div class="lovenotes-image-fallback-card-description truncate">
          ${description}
        </div>
      </div>
    `;
  }

  @property({ attribute: false })
  accessor state!: ResolvedStateInfo;
}

declare global {
  interface HTMLElementTagNameMap {
    'lovenotes-image-fallback-card': ImageBlockFallbackCard;
  }
}
