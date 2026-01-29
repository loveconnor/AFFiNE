/* CSS variables. You need to handle all places where `CSS variables` are marked. */

import { LINE_COLORS } from '@blocksuite/lovenotes-model';
import {
  type LoveNotesCssVariables,
  type LoveNotesTheme,
  cssVar,
} from '@toeverything/theme';
export { cssVar } from '@toeverything/theme';
import { type LoveNotesThemeKeyV2, cssVarV2 } from '@toeverything/theme/v2';
import { unsafeCSS } from 'lit';
export { cssVarV2 } from '@toeverything/theme/v2';
export const ColorVariables = [
  '--lovenotes-brand-color',
  '--lovenotes-primary-color',
  '--lovenotes-secondary-color',
  '--lovenotes-tertiary-color',
  '--lovenotes-hover-color',
  '--lovenotes-icon-color',
  '--lovenotes-icon-secondary',
  '--lovenotes-border-color',
  '--lovenotes-divider-color',
  '--lovenotes-placeholder-color',
  '--lovenotes-quote-color',
  '--lovenotes-link-color',
  '--lovenotes-edgeless-grid-color',
  '--lovenotes-success-color',
  '--lovenotes-warning-color',
  '--lovenotes-error-color',
  '--lovenotes-processing-color',
  '--lovenotes-text-emphasis-color',
  '--lovenotes-text-primary-color',
  '--lovenotes-text-secondary-color',
  '--lovenotes-text-disable-color',
  '--lovenotes-black-10',
  '--lovenotes-black-30',
  '--lovenotes-black-50',
  '--lovenotes-black-60',
  '--lovenotes-black-80',
  '--lovenotes-black-90',
  '--lovenotes-black',
  '--lovenotes-white-10',
  '--lovenotes-white-30',
  '--lovenotes-white-50',
  '--lovenotes-white-60',
  '--lovenotes-white-80',
  '--lovenotes-white-90',
  '--lovenotes-white',
  '--lovenotes-background-code-block',
  '--lovenotes-background-tertiary-color',
  '--lovenotes-background-processing-color',
  '--lovenotes-background-error-color',
  '--lovenotes-background-warning-color',
  '--lovenotes-background-success-color',
  '--lovenotes-background-primary-color',
  '--lovenotes-background-secondary-color',
  '--lovenotes-background-modal-color',
  '--lovenotes-background-overlay-panel-color',
  '--lovenotes-tag-blue',
  '--lovenotes-tag-green',
  '--lovenotes-tag-teal',
  '--lovenotes-tag-white',
  '--lovenotes-tag-purple',
  '--lovenotes-tag-red',
  '--lovenotes-tag-pink',
  '--lovenotes-tag-yellow',
  '--lovenotes-tag-orange',
  '--lovenotes-tag-gray',
  ...LINE_COLORS,
  '--lovenotes-tooltip',
  '--lovenotes-blue',
];

export const SizeVariables = [
  '--lovenotes-font-h-1',
  '--lovenotes-font-h-2',
  '--lovenotes-font-h-3',
  '--lovenotes-font-h-4',
  '--lovenotes-font-h-5',
  '--lovenotes-font-h-6',
  '--lovenotes-font-base',
  '--lovenotes-font-sm',
  '--lovenotes-font-xs',
  '--lovenotes-line-height',
  '--lovenotes-z-index-modal',
  '--lovenotes-z-index-popover',
];

export const FontFamilyVariables = [
  '--lovenotes-font-family',
  '--lovenotes-font-number-family',
  '--lovenotes-font-code-family',
];

export const StyleVariables = [
  '--lovenotes-editor-width',

  '--lovenotes-theme-mode',
  '--lovenotes-editor-mode',
  /* --lovenotes-palette-transparent: special values added for the sake of logical consistency. */
  '--lovenotes-palette-transparent',

  '--lovenotes-popover-shadow',
  '--lovenotes-menu-shadow',
  '--lovenotes-float-button-shadow',
  '--lovenotes-shadow-1',
  '--lovenotes-shadow-2',
  '--lovenotes-shadow-3',

  '--lovenotes-paragraph-space',
  '--lovenotes-popover-radius',
  '--lovenotes-scale',
  ...SizeVariables,
  ...ColorVariables,
  ...FontFamilyVariables,
] as const;

type VariablesType = typeof StyleVariables;
export type CssVariableName = Extract<
  VariablesType[keyof VariablesType],
  string
>;

export type CssVariablesMap = Record<CssVariableName, string>;

export const unsafeCSSVar = (
  key: keyof LoveNotesCssVariables | keyof LoveNotesTheme,
  fallback?: string
) => unsafeCSS(cssVar(key, fallback));

export const unsafeCSSVarV2 = (key: LoveNotesThemeKeyV2, fallback?: string) =>
  unsafeCSS(cssVarV2(key, fallback));
