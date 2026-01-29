export interface LoveNotesThemePlugin {
  onThemeChanged(options: { darkMode: boolean }): Promise<void>;
  getSystemNavBarHeight(): Promise<{ height: number }>;
}
