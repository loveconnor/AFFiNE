import { unsafeCSSVarV2 } from '@blocksuite/lovenotes-shared/theme';
import { css } from 'lit';

export const styles = css`
  .lovenotes-attachment-container {
    border-radius: 8px;
    box-sizing: border-box;
    user-select: none;
    overflow: hidden;
    border: 1px solid ${unsafeCSSVarV2('layer/background/tertiary')};
    background: ${unsafeCSSVarV2('layer/background/primary')};

    &.focused {
      border-color: ${unsafeCSSVarV2('layer/insideBorder/primaryBorder')};
    }
  }

  .lovenotes-attachment-container.comment-highlighted {
    outline: 2px solid ${unsafeCSSVarV2('block/comment/highlightUnderline')};
  }

  .lovenotes-attachment-card {
    display: flex;
    gap: 12px;
    padding: 12px;
  }

  .lovenotes-attachment-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    flex: 1 0 0;
    min-width: 0;
  }

  .truncate {
    align-self: stretch;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .lovenotes-attachment-content-title {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    align-self: stretch;
  }

  .lovenotes-attachment-content-title-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--lovenotes-text-primary-color);
    font-size: 16px;
  }

  .lovenotes-attachment-content-title-text {
    color: var(--lovenotes-text-primary-color);
    font-family: var(--lovenotes-font-family);
    font-size: var(--lovenotes-font-sm);
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
  }

  .lovenotes-attachment-content-description {
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: 8px;
  }

  .lovenotes-attachment-content-info {
    color: var(--lovenotes-text-secondary-color);
    font-family: var(--lovenotes-font-family);
    font-size: var(--lovenotes-font-xs);
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .lovenotes-attachment-content-button {
    display: flex;
    height: 20px;
    align-items: center;
    align-self: stretch;
    gap: 4px;
    white-space: nowrap;
    padding: 0 4px;
    color: ${unsafeCSSVarV2('button/primary')};
    font-family: var(--lovenotes-font-family);
    font-size: var(--lovenotes-font-xs);
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 20px;

    svg {
      font-size: 16px;
    }
  }

  .lovenotes-attachment-banner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lovenotes-attachment-card.loading {
    .lovenotes-attachment-content-title-text {
      color: ${unsafeCSSVarV2('text/placeholder')};
    }
  }

  .lovenotes-attachment-card.error {
    .lovenotes-attachment-content-title-icon {
      color: ${unsafeCSSVarV2('status/error')};
    }
  }

  .lovenotes-attachment-card.loading,
  .lovenotes-attachment-card.error {
    background: ${unsafeCSSVarV2('layer/background/secondary')};
  }

  .lovenotes-attachment-card.cubeThick {
    flex-direction: column-reverse;

    .lovenotes-attachment-content {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    }

    .lovenotes-attachment-banner {
      justify-content: space-between;
    }
  }

  .lovenotes-attachment-embed-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .lovenotes-attachment-embed-status {
    position: absolute;
    left: 14px;
    bottom: 64px;
  }

  .lovenotes-attachment-embed-event-mask {
    position: absolute;
    inset: 0;
  }
`;
