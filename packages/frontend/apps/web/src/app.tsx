import { CacheProvider } from '@emotion/react';
import { LoveNotesContext } from '@lovenotes/core/components/context';
import { AppContainer } from '@lovenotes/core/desktop/components/app-container';
import { router } from '@lovenotes/core/desktop/router';
import { configureCommonModules } from '@lovenotes/core/modules';
import { I18nProvider } from '@lovenotes/core/modules/i18n';
import { LifecycleService } from '@lovenotes/core/modules/lifecycle';
import {
  configureLocalStorageStateStorageImpls,
  NbstoreProvider,
} from '@lovenotes/core/modules/storage';
import { PopupWindowProvider } from '@lovenotes/core/modules/url';
import { configureBrowserWorkbenchModule } from '@lovenotes/core/modules/workbench';
import { configureBrowserWorkspaceFlavours } from '@lovenotes/core/modules/workspace-engine';
import createEmotionCache from '@lovenotes/core/utils/create-emotion-cache';
import { getWorkerUrl } from '@lovenotes/env/worker';
import { Framework, FrameworkRoot, getCurrentStore } from '@lovenotes/infra';
import { OpClient } from '@lovenotes/infra/op';
import { StoreManagerClient } from '@lovenotes/nbstore/worker/client';
import { setTelemetryTransport } from '@lovenotes/track';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

const cache = createEmotionCache();

let storeManagerClient: StoreManagerClient;

const workerUrl = getWorkerUrl('nbstore');

if (
  window.SharedWorker &&
  localStorage.getItem('disableSharedWorker') !== 'true'
) {
  const worker = new SharedWorker(workerUrl, {
    name: 'lovenotes-shared-worker',
  });
  storeManagerClient = new StoreManagerClient(new OpClient(worker.port));
} else {
  const worker = new Worker(workerUrl);
  storeManagerClient = new StoreManagerClient(new OpClient(worker));
}
setTelemetryTransport(storeManagerClient.telemetry);
window.addEventListener('beforeunload', () => {
  storeManagerClient.dispose();
});
window.addEventListener('focus', () => {
  storeManagerClient.resume();
});
window.addEventListener('click', () => {
  storeManagerClient.resume();
});
window.addEventListener('blur', () => {
  storeManagerClient.pause();
});

const future = {
  v7_startTransition: true,
} as const;

const framework = new Framework();
configureCommonModules(framework);
configureBrowserWorkbenchModule(framework);
configureLocalStorageStateStorageImpls(framework);
configureBrowserWorkspaceFlavours(framework);
framework.impl(NbstoreProvider, {
  openStore(key, options) {
    return storeManagerClient.open(key, options);
  },
});
framework.impl(PopupWindowProvider, {
  open: (target: string) => {
    const targetUrl = new URL(target);

    let url: string;
    // safe to open directly if in the same origin
    if (targetUrl.origin === location.origin) {
      url = target;
    } else {
      const redirectProxy = location.origin + '/redirect-proxy';
      const search = new URLSearchParams({
        redirect_uri: target,
      });

      url = `${redirectProxy}?${search.toString()}`;
    }
    window.open(url, '_blank', 'popup noreferrer noopener');
  },
});
const frameworkProvider = framework.provider();

// setup application lifecycle events, and emit application start event
window.addEventListener('focus', () => {
  frameworkProvider.get(LifecycleService).applicationFocus();
});
frameworkProvider.get(LifecycleService).applicationStart();

export function App() {
  return (
    <Suspense>
      <FrameworkRoot framework={frameworkProvider}>
        <CacheProvider value={cache}>
          <I18nProvider>
            <LoveNotesContext store={getCurrentStore()}>
              <RouterProvider
                fallbackElement={<AppContainer fallback />}
                router={router}
                future={future}
              />
            </LoveNotesContext>
          </I18nProvider>
        </CacheProvider>
      </FrameworkRoot>
    </Suspense>
  );
}
