import type { Workspace } from '@blocksuite/lovenotes/store';
import { Service } from '@lovenotes/infra';
import type { BlobStorage, DocStorage } from '@lovenotes/nbstore';

import type { WorkspaceFlavoursService } from './flavours';

export class WorkspaceFactoryService extends Service {
  constructor(private readonly flavoursService: WorkspaceFlavoursService) {
    super();
  }

  /**
   * create workspace
   * @param flavour workspace flavour
   * @param initial callback to put initial data to workspace
   * @returns workspace id
   */
  create = async (
    flavour: string,
    initial: (
      docCollection: Workspace,
      blobFrontend: BlobStorage,
      docFrontend: DocStorage
    ) => Promise<void> = () => Promise.resolve()
  ) => {
    const provider = this.flavoursService.flavours$.value.find(
      x => x.flavour === 'local'
    );
    if (!provider) {
      throw new Error(`Unknown workspace flavour: local`);
    }
    const metadata = await provider.createWorkspace(initial);
    return metadata;
  };
}
