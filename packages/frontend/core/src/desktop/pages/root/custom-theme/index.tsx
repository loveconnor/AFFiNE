import { EditorSettingService } from '@lovenotes/core/modules/editor-setting';
import { FeatureFlagService } from '@lovenotes/core/modules/feature-flag';
import { ThemeEditorService } from '@lovenotes/core/modules/theme-editor';
import { useLiveData, useServices } from '@toeverything/infra';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

let _provided = false;
let appliedThemeKeys = new Set<string>();

export const CustomThemeModifier = () => {
  const { themeEditorService, featureFlagService, editorSettingService } =
    useServices({
      ThemeEditorService,
      FeatureFlagService,
      EditorSettingService,
    });
  const enableThemeEditor = useLiveData(
    featureFlagService.flags.enable_theme_editor.$
  );
  const settings = useLiveData(editorSettingService.editorSetting.settings$);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!enableThemeEditor) return;
    if (_provided) return;

    _provided = true;

    const sub = themeEditorService.customTheme$.subscribe(themeObj => {
      if (!themeObj) return;

      const mode = resolvedTheme === 'dark' ? 'dark' : 'light';
      const valueMap = themeObj[mode];

      const rootStyle = document.documentElement.style;

      appliedThemeKeys.forEach(key => {
        rootStyle.removeProperty(key);
      });
      appliedThemeKeys = new Set(Object.keys(valueMap));

      // recover color scheme set by next-themes
      rootStyle.colorScheme = mode;

      Object.entries(valueMap).forEach(([key, value]) => {
        if (value) {
          rootStyle.setProperty(key, value);
        }
      });
    });

    return () => {
      _provided = false;
      sub.unsubscribe();
    };
  }, [resolvedTheme, enableThemeEditor, themeEditorService]);

  // Apply font size CSS variable when settings change
  useEffect(() => {
    if (settings.fontSize) {
      document.documentElement.style.setProperty(
        '--lovenotes-font-base',
        `${settings.fontSize}px`
      );
    }
  }, [settings.fontSize]);

  return null;
};
