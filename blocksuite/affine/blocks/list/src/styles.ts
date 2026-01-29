import { css } from 'lit';

export const listPrefix = css`
  .lovenotes-list-block__prefix {
    display: flex;
    color: var(--lovenotes-blue-700);
    font-size: var(--lovenotes-font-sm);
    user-select: none;
    position: relative;
  }

  .lovenotes-list-block__numbered {
    min-width: 22px;
    height: 24px;
    margin-left: 2px;
  }

  .lovenotes-list-block__todo-prefix {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 24px;
    height: 24px;
    color: var(--lovenotes-icon-color);
  }

  .lovenotes-list-block__todo-prefix.readonly {
    cursor: default;
  }

  .lovenotes-list-block__todo-prefix > svg {
    width: 20px;
    height: 20px;
  }
`;

export const listBlockStyles = css`
  lovenotes-list {
    display: block;
    font-size: var(--lovenotes-font-base);
  }

  lovenotes-list code {
    font-size: calc(var(--lovenotes-font-base) - 3px);
    padding: 0px 4px 2px;
  }

  .lovenotes-list-block-container {
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
  }
  .lovenotes-list-block-container .lovenotes-list-block-container {
    margin-top: 0;
  }
  .lovenotes-list-rich-text-wrapper {
    position: relative;
    display: flex;
  }
  .lovenotes-list-rich-text-wrapper rich-text {
    flex: 1;
  }

  .lovenotes-list--checked {
    color: var(--lovenotes-text-secondary-color);
  }

  ${listPrefix}
`;
