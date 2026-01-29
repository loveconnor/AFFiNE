import { scrollbarStyle } from '@blocksuite/lovenotes-shared/styles';
import { unsafeCSSVarV2 } from '@blocksuite/lovenotes-shared/theme';
import { css } from 'lit';

export const codeBlockStyles = css`
  lovenotes-code {
    display: block;
  }

  .lovenotes-code-block-container {
    font-size: var(--lovenotes-font-xs);
    line-height: var(--lovenotes-line-height);
    position: relative;
    padding: 32px 20px;
    background: var(--lovenotes-background-code-block);
    border-radius: 10px;
    box-sizing: border-box;
  }

  .lovenotes-code-block-container.mobile {
    padding: 12px;
  }

  .lovenotes-code-block-container.highlight-comment {
    outline: 2px solid ${unsafeCSSVarV2('block/comment/highlightUnderline')};
  }

  ${scrollbarStyle('.lovenotes-code-block-container rich-text')}

  .lovenotes-code-block-container .inline-editor {
    font-family: var(--lovenotes-font-code-family);
    font-variant-ligatures: none;
  }

  .lovenotes-code-block-container v-line {
    position: relative;
    display: inline-grid !important;
    grid-template-columns: auto minmax(0, 1fr);
  }

  .lovenotes-code-block-container.disable-line-numbers v-line {
    grid-template-columns: unset;
  }

  .lovenotes-code-block-container div:has(> v-line) {
    display: grid;
  }

  .lovenotes-code-block-container .line-number {
    position: sticky;
    text-align: left;
    padding-right: 12px;
    width: 32px;
    word-break: break-word;
    white-space: nowrap;
    left: -0.5px;
    z-index: 1;
    background: var(--lovenotes-background-code-block);
    font-size: var(--lovenotes-font-xs);
    line-height: var(--lovenotes-line-height);
    color: var(--lovenotes-text-secondary);
    box-sizing: border-box;
    user-select: none;
  }

  .lovenotes-code-block-container.disable-line-numbers .line-number {
    display: none;
  }

  lovenotes-code .lovenotes-code-block-preview {
    padding: 12px;
  }
`;
