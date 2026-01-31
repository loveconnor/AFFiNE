import { ThemeProvider } from '@lovenotes/core/components/theme-provider';
import { configureElectronStateStorageImpls } from '@lovenotes/core/desktop/storage';
import { configureDesktopApiModule } from '@lovenotes/core/modules/desktop-api';
import {
  configureI18nModule,
  I18nProvider,
} from '@lovenotes/core/modules/i18n';
import { configureStorageModule } from '@lovenotes/core/modules/storage';
import { configureEssentialThemeModule } from '@lovenotes/core/modules/theme';
import { appInfo } from '@lovenotes/electron-api';
import { Framework, FrameworkRoot } from '@lovenotes/infra';

import * as styles from './app.css';
import { Recording } from './recording';

const framework = new Framework();
configureI18nModule(framework);
configureEssentialThemeModule(framework);
configureStorageModule(framework);
configureElectronStateStorageImpls(framework);
configureDesktopApiModule(framework);
const frameworkProvider = framework.provider();

const mode = appInfo?.windowName as 'notification' | 'recording';

export function App() {
  return (
    <FrameworkRoot framework={frameworkProvider}>
      <ThemeProvider>
        <I18nProvider>
          <div className={styles.root} data-is-windows={environment.isWindows}>
            {mode === 'recording' && <Recording />}
          </div>
        </I18nProvider>
      </ThemeProvider>
    </FrameworkRoot>
  );
}
