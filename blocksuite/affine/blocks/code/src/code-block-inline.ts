import { CommentInlineSpecExtension } from '@blocksuite/lovenotes-inline-comment';
import { LatexInlineSpecExtension } from '@blocksuite/lovenotes-inline-latex';
import { LinkInlineSpecExtension } from '@blocksuite/lovenotes-inline-link';
import {
  BackgroundInlineSpecExtension,
  BoldInlineSpecExtension,
  CodeInlineSpecExtension,
  ColorInlineSpecExtension,
  ItalicInlineSpecExtension,
  StrikeInlineSpecExtension,
  UnderlineInlineSpecExtension,
} from '@blocksuite/lovenotes-inline-preset';
import type { LoveNotesTextAttributes } from '@blocksuite/lovenotes-shared/types';
import {
  InlineManagerExtension,
  InlineSpecExtension,
} from '@blocksuite/std/inline';
import { html } from 'lit';
import { z } from 'zod';

export const CodeBlockUnitSpecExtension =
  InlineSpecExtension<LoveNotesTextAttributes>({
    name: 'code-block-unit',
    schema: z.object({
      'code-block-uint': z.undefined(),
    }),
    match: () => true,
    renderer: ({ delta }) => {
      return html`<lovenotes-code-unit .delta=${delta}></lovenotes-code-unit>`;
    },
  });

export const CodeBlockInlineManagerExtension =
  InlineManagerExtension<LoveNotesTextAttributes>({
    id: 'CodeBlockInlineManager',
    enableMarkdown: false,
    specs: [
      BoldInlineSpecExtension.identifier,
      ItalicInlineSpecExtension.identifier,
      UnderlineInlineSpecExtension.identifier,
      StrikeInlineSpecExtension.identifier,
      CodeInlineSpecExtension.identifier,
      BackgroundInlineSpecExtension.identifier,
      ColorInlineSpecExtension.identifier,
      LatexInlineSpecExtension.identifier,
      LinkInlineSpecExtension.identifier,
      CodeBlockUnitSpecExtension.identifier,
      CommentInlineSpecExtension.identifier,
    ],
  });
