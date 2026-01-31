import { createEvent } from '@lovenotes/infra';

import type { AuthAccountInfo } from '../entities/session';

export const AccountChanged = createEvent<AuthAccountInfo | null>(
  'AccountChanged'
);
