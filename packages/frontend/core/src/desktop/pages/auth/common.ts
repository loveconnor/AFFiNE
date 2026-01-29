import { z } from 'zod';

export const supportedClient = z.enum([
  'web',
  'lovenotes',
  'lovenotes-canary',
  'lovenotes-beta',
  ...(BUILD_CONFIG.debug ? ['lovenotes-dev'] : []),
]);
