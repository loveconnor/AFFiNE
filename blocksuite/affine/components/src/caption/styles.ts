import { css } from 'lit';

export const styles = css`
  .lovenotes-block-component.border.light .selected-style {
    border-radius: 8px;
    box-shadow: 0px 0px 0px 1px var(--lovenotes-brand-color);
  }
  .lovenotes-block-component.border.dark .selected-style {
    border-radius: 8px;
    box-shadow: 0px 0px 0px 1px var(--lovenotes-brand-color);
  }
  @media print {
    .lovenotes-block-component.border.light .selected-style,
    .lovenotes-block-component.border.dark .selected-style {
      box-shadow: none;
    }
  }
`;
