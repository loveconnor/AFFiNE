import { setupGlobal } from '@lovenotes/env/global';
import { getBuildConfig } from '@lovenotes-tools/utils/build-config';
import { Package } from '@lovenotes-tools/utils/workspace';

globalThis.BUILD_CONFIG = getBuildConfig(new Package('@lovenotes/web'), {
  mode: 'development',
  channel: 'canary',
});

if (typeof window !== 'undefined') {
  window.location.search = '?prefixUrl=http://127.0.0.1:3010/';
}

setupGlobal();
