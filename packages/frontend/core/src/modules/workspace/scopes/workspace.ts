import { Scope } from '@lovenotes/infra';
import type { WorkerInitOptions } from '@lovenotes/nbstore/worker/client';

import type { WorkspaceOpenOptions } from '../open-options';

export class WorkspaceScope extends Scope<{
  openOptions: WorkspaceOpenOptions;
  engineWorkerInitOptions: WorkerInitOptions;
}> {}
