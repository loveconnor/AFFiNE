import type { OpSchema } from '@lovenotes/infra/op';

export interface WorkerOps extends OpSchema {
  renderWorkspaceProfile: [Uint8Array[], { name?: string; avatar?: string }];
}
