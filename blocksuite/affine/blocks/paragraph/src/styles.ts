import { unsafeCSSVarV2 } from '@blocksuite/lovenotes-shared/theme';
import { css } from 'lit';

export const paragraphBlockStyles = css`
  lovenotes-paragraph {
    box-sizing: border-box;
    display: block;
    font-size: var(--lovenotes-font-base);
  }

  .lovenotes-paragraph-block-container {
    position: relative;
    border-radius: 4px;
  }
  .lovenotes-paragraph-rich-text-wrapper {
    position: relative;
  }

  .lovenotes-paragraph-block-container.highlight-comment {
    background-color: ${unsafeCSSVarV2('block/comment/highlightActive')};
    outline: 2px solid ${unsafeCSSVarV2('block/comment/highlightUnderline')};
  }

  lovenotes-paragraph code {
    font-size: calc(var(--lovenotes-font-base) - 3px);
    padding: 0px 4px 2px;
  }

  .h1 {
    font-size: var(--lovenotes-font-h-1);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: calc(1em + 8px);
    margin-top: 18px;
    margin-bottom: 10px;
  }

  .h1 code {
    font-size: calc(var(--lovenotes-font-base) + 10px);
    padding: 0px 4px;
  }

  .h2 {
    font-size: var(--lovenotes-font-h-2);
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: calc(1em + 10px);
    margin-top: 14px;
    margin-bottom: 10px;
  }

  .h2 code {
    font-size: calc(var(--lovenotes-font-base) + 8px);
    padding: 0px 4px;
  }

  .h3 {
    font-size: var(--lovenotes-font-h-3);
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: calc(1em + 8px);
    margin-top: 12px;
    margin-bottom: 10px;
  }

  .h3 code {
    font-size: calc(var(--lovenotes-font-base) + 6px);
    padding: 0px 4px;
  }

  .h4 {
    font-size: var(--lovenotes-font-h-4);
    font-weight: 600;
    letter-spacing: -0.015em;
    line-height: calc(1em + 8px);
    margin-top: 12px;
    margin-bottom: 10px;
  }
  .h4 code {
    font-size: calc(var(--lovenotes-font-base) + 4px);
    padding: 0px 4px;
  }

  .h5 {
    font-size: var(--lovenotes-font-h-5);
    font-weight: 600;
    letter-spacing: -0.015em;
    line-height: calc(1em + 8px);
    margin-top: 12px;
    margin-bottom: 10px;
  }
  .h5 code {
    font-size: calc(var(--lovenotes-font-base) + 2px);
    padding: 0px 4px;
  }

  .h6 {
    font-size: var(--lovenotes-font-h-6);
    font-weight: 600;
    letter-spacing: -0.015em;
    line-height: calc(1em + 8px);
    margin-top: 12px;
    margin-bottom: 10px;
  }

  .h6 code {
    font-size: var(--lovenotes-font-base);
    padding: 0px 4px 2px;
  }

  .quote {
    line-height: 26px;
    padding-left: 17px;
    margin-top: var(--lovenotes-paragraph-space);
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
  }
  .quote::after {
    content: '';
    width: 2px;
    height: calc(100% - 20px);
    margin-top: 10px;
    margin-bottom: 10px;
    position: absolute;
    left: 0;
    top: 0;
    background: var(--lovenotes-quote-color);
    border-radius: 18px;
  }

  .lovenotes-paragraph-placeholder {
    position: absolute;
    display: none;
    max-width: 100%;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    left: 0;
    bottom: 0;
    pointer-events: none;
    color: var(--lovenotes-black-30);
    fill: var(--lovenotes-black-30);
  }
  @media print {
    .lovenotes-paragraph-placeholder {
      display: none !important;
    }
  }
  .lovenotes-paragraph-placeholder.visible {
    display: block;
  }
  @media print {
    .lovenotes-paragraph-placeholder.visible {
      display: none;
    }
  }
`;
