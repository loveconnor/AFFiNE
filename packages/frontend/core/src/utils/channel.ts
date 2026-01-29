import { z } from 'zod';

export const appSchemes = z.enum([
  'lovenotes',
  'lovenotes-canary',
  'lovenotes-beta',
  'lovenotes-internal',
  'lovenotes-dev',
]);

export type Scheme = z.infer<typeof appSchemes>;
export type Channel = 'stable' | 'canary' | 'beta' | 'internal';

export const schemeToChannel = {
  lovenotes: 'stable',
  'lovenotes-canary': 'canary',
  'lovenotes-beta': 'beta',
  'lovenotes-internal': 'internal',
  'lovenotes-dev': 'canary', // dev does not have a dedicated app. use canary as the placeholder.
} as Record<Scheme, Channel>;

export const channelToScheme = {
  stable: 'lovenotes',
  canary: BUILD_CONFIG.debug ? 'lovenotes-dev' : 'lovenotes-canary',
  beta: 'lovenotes-beta',
  internal: 'lovenotes-internal',
} as Record<Channel, Scheme>;

export const appIconMap = {
  stable: '/imgs/app-icon-stable.ico',
  canary: '/imgs/app-icon-canary.ico',
  beta: '/imgs/app-icon-beta.ico',
  internal: '/imgs/app-icon-internal.ico',
} satisfies Record<Channel, string>;

export const appNames = {
  stable: 'LoveNotes',
  canary: 'LoveNotes Canary',
  beta: 'LoveNotes Beta',
  internal: 'LoveNotes Internal',
} satisfies Record<Channel, string>;

export const appSchemaUrl = z.custom<string>(
  (url: string) => {
    try {
      return appSchemes.safeParse(new URL(url).protocol.replace(':', ''))
        .success;
    } catch {
      return false;
    }
  },
  { message: 'Invalid URL or protocol' }
);
