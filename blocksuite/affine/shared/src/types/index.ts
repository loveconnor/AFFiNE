import type { FootNote, ReferenceInfo } from '@blocksuite/lovenotes-model';
import type { InlineEditor } from '@blocksuite/std/inline';
import type { BlockModel } from '@blocksuite/store';
export * from './uni-component';

export type NoteChildrenFlavour =
  | 'lovenotes:paragraph'
  | 'lovenotes:list'
  | 'lovenotes:code'
  | 'lovenotes:divider'
  | 'lovenotes:database'
  | 'lovenotes:data-view'
  | 'lovenotes:image'
  | 'lovenotes:bookmark'
  | 'lovenotes:attachment'
  | 'lovenotes:surface-ref';

export interface Viewport {
  left: number;
  top: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
  scrollHeight: number;
  clientWidth: number;
  clientHeight: number;
}

export type ExtendedModel = BlockModel & Record<string, any>;

export type IndentContext = {
  blockId: string;
  inlineIndex: number;
  flavour: string;
  type: 'indent' | 'dedent';
};

export type LoveNotesTextStyleAttributes = {
  bold?: true | null;
  italic?: true | null;
  underline?: true | null;
  strike?: true | null;
  code?: true | null;
  color?: string | null;
  background?: string | null;
};

export type LoveNotesTextAttributes = LoveNotesTextStyleAttributes & {
  link?: string | null;
  reference?:
    | ({
        type: 'Subpage' | 'LinkedPage';
      } & ReferenceInfo)
    | null;
  latex?: string | null;
  footnote?: FootNote | null;
  mention?: {
    member: string;
    notification?: string;
  } | null;
  [key: `comment-${string}`]: boolean | null;
};

export type LoveNotesInlineEditor = InlineEditor<LoveNotesTextAttributes>;

export type SelectedRect = {
  left: number;
  top: number;
  width: number;
  height: number;
  borderWidth: number;
  borderStyle: string;
  rotate: number;
};
