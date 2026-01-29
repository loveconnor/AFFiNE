import { fontSMStyle, panelBaseStyle } from '@blocksuite/lovenotes-shared/styles';
import { css } from 'lit';

const editLinkStyle = css`
  .lovenotes-link-edit-popover {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      'text-area .'
      'link-area btn';
    justify-items: center;
    align-items: center;
    width: 320px;
    gap: 8px 12px;
    padding: 8px;
    box-sizing: content-box;
  }

  ${fontSMStyle('.lovenotes-link-edit-popover label')}
  .lovenotes-link-edit-popover label {
    box-sizing: border-box;
    color: var(--lovenotes-icon-color);
    font-weight: 400;
  }

  ${fontSMStyle('.lovenotes-link-edit-popover input')}
  .lovenotes-link-edit-popover input {
    color: inherit;
    padding: 0;
    border: none;
    background: transparent;
    color: var(--lovenotes-text-primary-color);
  }
  .lovenotes-link-edit-popover input::placeholder {
    color: var(--lovenotes-placeholder-color);
  }
  input:focus {
    outline: none;
  }
  .lovenotes-link-edit-popover input:focus ~ label,
  .lovenotes-link-edit-popover input:active ~ label {
    color: var(--lovenotes-primary-color);
  }

  .lovenotes-edit-area {
    width: 280px;
    padding: 4px 10px;
    display: grid;
    gap: 8px;
    grid-template-columns: 26px auto;
    grid-template-rows: repeat(1, 1fr);
    grid-template-areas: 'label input';
    user-select: none;
    box-sizing: border-box;

    border: 1px solid var(--lovenotes-border-color);
    box-sizing: border-box;

    outline: none;
    border-radius: 4px;
    background: transparent;
  }
  .lovenotes-edit-area:focus-within {
    border-color: var(--lovenotes-blue-700);
    box-shadow: var(--lovenotes-active-shadow);
  }

  .lovenotes-edit-area.text {
    grid-area: text-area;
  }

  .lovenotes-edit-area.link {
    grid-area: link-area;
  }

  .lovenotes-edit-label {
    grid-area: label;
  }

  .lovenotes-edit-input {
    grid-area: input;
  }

  .lovenotes-confirm-button {
    grid-area: btn;
    user-select: none;
  }
`;

export const linkPopupStyle = css`
  :host {
    box-sizing: border-box;
  }

  .mock-selection {
    position: absolute;
    background-color: rgba(35, 131, 226, 0.28);
  }

  ${panelBaseStyle('.popover-container')}
  .popover-container {
    z-index: var(--lovenotes-z-index-popover);
    animation: lovenotes-popover-fade-in 0.2s ease;
    position: absolute;
  }

  @keyframes lovenotes-popover-fade-in {
    from {
      opacity: 0;
      transform: translateY(-3px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .overlay-root {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: var(--lovenotes-z-index-popover);
  }

  .mock-selection-container {
    pointer-events: none;
  }

  .lovenotes-link-popover.create {
    display: flex;
    gap: 12px;
    padding: 8px;

    color: var(--lovenotes-text-primary-color);
  }

  .lovenotes-link-popover-input {
    min-width: 280px;
    height: 30px;
    box-sizing: border-box;
    padding: 4px 10px;
    background: var(--lovenotes-white-10);
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: var(--lovenotes-border-color);
    color: var(--lovenotes-text-primary-color);
  }
  ${fontSMStyle('.lovenotes-link-popover-input')}
  .lovenotes-link-popover-input::placeholder {
    color: var(--lovenotes-placeholder-color);
  }
  .lovenotes-link-popover-input:focus {
    border-color: var(--lovenotes-blue-700);
    box-shadow: var(--lovenotes-active-shadow);
  }

  ${editLinkStyle}
`;
