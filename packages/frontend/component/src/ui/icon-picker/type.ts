export enum IconType {
  Emoji = 'emoji',
  LoveNotesIcon = 'lovenotes-icon',
  Blob = 'blob',
}

export type IconData =
  | {
      type: IconType.Emoji;
      unicode: string;
    }
  | {
      type: IconType.LoveNotesIcon;
      name: string;
      color: string;
    }
  | {
      type: IconType.Blob;
      blob: Blob;
    };
