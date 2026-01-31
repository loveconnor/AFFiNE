import { createEvent } from '@lovenotes/infra';

import type { AuthAccountInfo } from '../entities/session';

export const AccountLoggedIn = createEvent<AuthAccountInfo>('AccountLoggedIn');
