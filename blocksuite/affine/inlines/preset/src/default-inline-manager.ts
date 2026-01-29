import { CommentInlineSpecExtension } from '@blocksuite/lovenotes-inline-comment';
import { FootNoteInlineSpecExtension } from '@blocksuite/lovenotes-inline-footnote';
import { LatexInlineSpecExtension } from '@blocksuite/lovenotes-inline-latex';
import { LinkInlineSpecExtension } from '@blocksuite/lovenotes-inline-link';
import { MentionInlineSpecExtension } from '@blocksuite/lovenotes-inline-mention';
import { ReferenceInlineSpecExtension } from '@blocksuite/lovenotes-inline-reference';
import type { LoveNotesTextAttributes } from '@blocksuite/lovenotes-shared/types';
import { InlineManagerExtension } from '@blocksuite/std/inline';

import {
  BackgroundInlineSpecExtension,
  BoldInlineSpecExtension,
  CodeInlineSpecExtension,
  ColorInlineSpecExtension,
  ItalicInlineSpecExtension,
  StrikeInlineSpecExtension,
  UnderlineInlineSpecExtension,
} from './inline-spec';

export const DefaultInlineManagerExtension =
  InlineManagerExtension<LoveNotesTextAttributes>({
    id: 'DefaultInlineManager',
    specs: [
      BoldInlineSpecExtension.identifier,
      ItalicInlineSpecExtension.identifier,
      UnderlineInlineSpecExtension.identifier,
      StrikeInlineSpecExtension.identifier,
      CodeInlineSpecExtension.identifier,
      BackgroundInlineSpecExtension.identifier,
      ColorInlineSpecExtension.identifier,
      LatexInlineSpecExtension.identifier,
      ReferenceInlineSpecExtension.identifier,
      LinkInlineSpecExtension.identifier,
      FootNoteInlineSpecExtension.identifier,
      MentionInlineSpecExtension.identifier,
      CommentInlineSpecExtension.identifier,
    ],
  });
