import { css } from 'lit';

export const embedNoteContentStyles = css`
  .lovenotes-embed-doc-content-note-blocks lovenotes-divider,
  .lovenotes-embed-doc-content-note-blocks lovenotes-divider > * {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph,
  .lovenotes-embed-doc-content-note-blocks lovenotes-list {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
    padding: 0 2px;
  }
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph *,
  .lovenotes-embed-doc-content-note-blocks lovenotes-list * {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    padding-top: 0;
    padding-bottom: 0;
    line-height: 20px;
    font-size: var(--lovenotes-font-xs);
    font-weight: 400;
  }
  .lovenotes-embed-doc-content-note-blocks lovenotes-list .lovenotes-list-block__prefix {
    height: 20px;
  }
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph .quote {
    padding-left: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph:has(.h1),
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph:has(.h2),
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph:has(.h3),
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph:has(.h4),
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph:has(.h5),
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph:has(.h6) {
    margin-top: 6px !important;
    margin-bottom: 4px !important;
    padding: 0 2px;
  }
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph:has(.h1) *,
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph:has(.h2) *,
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph:has(.h3) *,
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph:has(.h4) *,
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph:has(.h5) *,
  .lovenotes-embed-doc-content-note-blocks lovenotes-paragraph:has(.h6) * {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    padding-top: 0;
    padding-bottom: 0;
    line-height: 20px;
    font-size: var(--lovenotes-font-xs);
    font-weight: 600;
  }

  .lovenotes-embed-doc-content-note-blocks inline-comment {
    background-color: unset !important;
    border-bottom: unset !important;
  }

  .lovenotes-embed-linked-doc-block.horizontal {
    lovenotes-paragraph,
    lovenotes-list {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      max-height: 40px;
      overflow: hidden;
      display: flex;
    }
    lovenotes-paragraph .quote {
      padding-top: 4px;
      padding-bottom: 4px;
      height: 28px;
    }
    lovenotes-paragraph .quote::after {
      height: 20px;
      margin-top: 4px !important;
      margin-bottom: 4px !important;
    }
  }
`;
