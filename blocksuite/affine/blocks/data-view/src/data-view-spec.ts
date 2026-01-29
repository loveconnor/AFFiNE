import { BlockViewExtension, FlavourExtension } from '@blocksuite/std';
import type { ExtensionType } from '@blocksuite/store';
import { literal } from 'lit/static-html.js';

export const DataViewBlockSpec: ExtensionType[] = [
  FlavourExtension('lovenotes:data-view'),
  BlockViewExtension('lovenotes:data-view', literal`lovenotes-data-view`),
];
