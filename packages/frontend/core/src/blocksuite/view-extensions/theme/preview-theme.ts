import type { Container } from '@blocksuite/global/di';
import { ColorScheme } from '@blocksuite/lovenotes/model';
import {
  type ThemeExtension,
  ThemeExtensionIdentifier,
} from '@blocksuite/lovenotes/shared/services';
import {
  createSignalFromObservable,
  type Signal,
} from '@blocksuite/lovenotes/shared/utils';
import {
  type BlockStdScope,
  LifeCycleWatcher,
  StdIdentifier,
} from '@blocksuite/lovenotes/std';
import { AppThemeService } from '@lovenotes/core/modules/theme';
import type { FrameworkProvider } from '@lovenotes/infra';
import type { Observable } from 'rxjs';

export function getPreviewThemeExtension(framework: FrameworkProvider) {
  class LoveNotesPagePreviewThemeExtension
    extends LifeCycleWatcher
    implements ThemeExtension
  {
    static override readonly key = 'lovenotes-page-preview-theme';

    readonly theme: Signal<ColorScheme>;

    readonly disposables: (() => void)[] = [];

    static override setup(di: Container) {
      super.setup(di);
      di.override(
        ThemeExtensionIdentifier,
        LoveNotesPagePreviewThemeExtension,
        [StdIdentifier]
      );
    }

    constructor(std: BlockStdScope) {
      super(std);
      const theme$: Observable<ColorScheme> = framework
        .get(AppThemeService)
        .appTheme.theme$.map(theme => {
          return theme === ColorScheme.Dark
            ? ColorScheme.Dark
            : ColorScheme.Light;
        });
      const { signal, cleanup } = createSignalFromObservable<ColorScheme>(
        theme$,
        ColorScheme.Light
      );
      this.theme = signal;
      this.disposables.push(cleanup);
    }

    getAppTheme() {
      return this.theme;
    }

    getEdgelessTheme() {
      return this.theme;
    }

    override unmounted() {
      this.dispose();
    }

    dispose() {
      this.disposables.forEach(dispose => dispose());
    }
  }

  return LoveNotesPagePreviewThemeExtension;
}
