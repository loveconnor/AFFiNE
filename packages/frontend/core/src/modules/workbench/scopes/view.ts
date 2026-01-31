import { Scope } from '@lovenotes/infra';

import type { View } from '../entities/view';

export class ViewScope extends Scope<{
  view: View;
}> {}
