import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
});

globalStyle('body', {
  color: 'var(--lovenotes-text-primary-color)',
  fontFamily: 'var(--lovenotes-font-family)',
  fontSize: 'var(--lovenotes-font-base)',
  lineHeight: 'var(--lovenotes-font-height)',
  backgroundColor: 'var(--lovenotes-background-primary-color)',
});

globalStyle('.docs-story', {
  backgroundColor: 'var(--lovenotes-background-primary-color)',
});

globalStyle('body.sb-main-fullscreen', {
  overflowY: 'auto',
});
