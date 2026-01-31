import type { Container } from '@blocksuite/lovenotes/global/di';
import {
  FileSizeLimitProvider,
  type IFileSizeLimitService,
} from '@blocksuite/lovenotes/shared/services';
import { Extension } from '@blocksuite/lovenotes/store';
import { WorkspaceDialogService } from '@lovenotes/core/modules/dialogs';
import type { FrameworkProvider } from '@lovenotes/infra';
import track from '@lovenotes/track';

export function patchFileSizeLimitExtension(framework: FrameworkProvider) {
  const workspaceDialogService = framework.get(WorkspaceDialogService);

  class LoveNotesFileSizeLimitService
    extends Extension
    implements IFileSizeLimitService
  {
    // 2GB
    maxFileSize = 2 * 1024 * 1024 * 1024;

    onOverFileSize() {
      workspaceDialogService.open('setting', {
        activeTab: 'plans',
        scrollAnchor: 'cloudPricingPlan',
      });
      track.$.paywall.storage.viewPlans();
    }

    static override setup(di: Container) {
      di.override(FileSizeLimitProvider, LoveNotesFileSizeLimitService);
    }
  }

  return LoveNotesFileSizeLimitService;
}
