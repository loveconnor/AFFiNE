import { type LoveNotesTheme, darkTheme, lightTheme } from '@toeverything/theme';
import {
  type LoveNotesThemeKeyV2,
  darkThemeV2,
  lightThemeV2,
} from '@toeverything/theme/v2';
import { useTheme } from 'next-themes';

export const useThemeValueV2 = (key: LoveNotesThemeKeyV2) => {
  const { resolvedTheme } = useTheme();

  return resolvedTheme === 'dark' ? darkThemeV2[key] : lightThemeV2[key];
};

export const useThemeValueV1 = (key: keyof Omit<LoveNotesTheme, 'editorMode'>) => {
  const { resolvedTheme } = useTheme();

  return resolvedTheme === 'dark' ? darkTheme[key] : lightTheme[key];
};
