import {
  type LoveNotesCssVariables,
  combinedDarkCssVariables,
  combinedLightCssVariables,
} from '@toeverything/theme';
import { unsafeCSS } from 'lit';

const toolbarColorKeys: Array<keyof LoveNotesCssVariables> = [
  '--lovenotes-background-overlay-panel-color',
  '--lovenotes-v2-layer-background-overlayPanel' as never,
  '--lovenotes-v2-layer-insideBorder-blackBorder' as never,
  '--lovenotes-v2-icon-primary' as never,
  '--lovenotes-background-error-color',
  '--lovenotes-background-primary-color',
  '--lovenotes-background-tertiary-color',
  '--lovenotes-icon-color',
  '--lovenotes-icon-secondary',
  '--lovenotes-border-color',
  '--lovenotes-divider-color',
  '--lovenotes-text-primary-color',
  '--lovenotes-hover-color',
  '--lovenotes-hover-color-filled',
];

export const lightToolbarStyles = (selector: string) => `
  ${selector}[data-app-theme='light'] {
    ${toolbarColorKeys
      .map(key => `${key}: ${unsafeCSS(combinedLightCssVariables[key])};`)
      .join('\n')}
  }
`;

export const darkToolbarStyles = (selector: string) => `
  ${selector}[data-app-theme='dark'] {
    ${toolbarColorKeys
      .map(key => `${key}: ${unsafeCSS(combinedDarkCssVariables[key])};`)
      .join('\n')}
  }
`;
