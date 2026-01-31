import { notify, useConfirmModal } from '@lovenotes/component';
import { AuthService, ServersService } from '@lovenotes/core/modules/cloud';
import { GlobalDialogService } from '@lovenotes/core/modules/dialogs';
import type { Workspace } from '@lovenotes/core/modules/workspace';
import { WorkspacesService } from '@lovenotes/core/modules/workspace';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@lovenotes/infra';
import { useCallback } from 'react';

import { useNavigateHelper } from '../use-navigate-helper';

interface ConfirmEnableCloudOptions {
  /**
   * Fired when the workspace is successfully enabled
   */
  onSuccess?: () => void;
  /**
   * Fired when workspace is successfully enabled or user cancels the operation
   */
  onFinished?: () => void;
  openPageId?: string;
  serverId?: string;
}
type ConfirmEnableArgs = [Workspace, ConfirmEnableCloudOptions | undefined];

export const useEnableCloud = () => {
  // Cloud enablement disabled; return noop.
  return useCallback(() => undefined, []);
};
