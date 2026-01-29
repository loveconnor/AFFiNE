import { fontXSStyle, panelBaseStyle } from '@blocksuite/lovenotes-shared/styles';
import { css } from 'lit';

export const renameStyles = css`
  ${panelBaseStyle('.lovenotes-attachment-rename-container')}
  .lovenotes-attachment-rename-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 320px;
    gap: 12px;
    padding: 12px;
    z-index: var(--lovenotes-z-index-popover);
  }

  .lovenotes-attachment-rename-input-wrapper {
    display: flex;
    min-width: 280px;
    height: 30px;
    box-sizing: border-box;
    padding: 4px 10px;
    background: var(--lovenotes-white-10);
    border-radius: 4px;
    border: 1px solid var(--lovenotes-border-color);
  }

  .lovenotes-attachment-rename-input-wrapper:focus-within {
    border-color: var(--lovenotes-blue-700);
    box-shadow: var(--lovenotes-active-shadow);
  }

  .lovenotes-attachment-rename-input-wrapper input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: var(--lovenotes-text-primary-color);
  }
  ${fontXSStyle('.lovenotes-attachment-rename-input-wrapper input')}

  .lovenotes-attachment-rename-input-wrapper input::placeholder {
    color: var(--lovenotes-placeholder-color);
  }

  .lovenotes-attachment-rename-extension {
    font-size: var(--lovenotes-font-xs);
    color: var(--lovenotes-text-secondary-color);
  }

  .lovenotes-attachment-rename-overlay-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: var(--lovenotes-z-index-popover);
  }
`;

export const styles = css`
  :host {
    z-index: 1;
  }
`;
