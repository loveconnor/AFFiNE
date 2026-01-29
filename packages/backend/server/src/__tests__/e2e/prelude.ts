import { getBuildConfig } from '@lovenotes-tools/utils/build-config';
import { Package } from '@lovenotes-tools/utils/workspace';

import { createApp } from './create-app';

globalThis.BUILD_CONFIG = getBuildConfig(new Package('@lovenotes/web'), {
  mode: 'development',
  channel: 'canary',
});
// @ts-expect-error testing
globalThis.app = await createApp();
