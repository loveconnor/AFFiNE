import { notify } from '@lovenotes/component';
import { WorkspaceDialogService } from '@lovenotes/core/modules/dialogs';
import { WorkspacePermissionService } from '@lovenotes/core/modules/permissions';
import { WorkspaceService } from '@lovenotes/core/modules/workspace';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@lovenotes/infra';
import type { BlobSyncState } from '@lovenotes/nbstore';
import { debounce } from 'lodash-es';
import { useCallback, useEffect } from 'react';

/**
 * TODO(eyhn): refactor this
 */
export const OverCapacityNotification = () => {
  const t = useI18n();
  const currentWorkspace = useService(WorkspaceService).workspace;
  const permissionService = useService(WorkspacePermissionService);
  const isOwner = useLiveData(permissionService.permission.isOwner$);
  useEffect(() => {
    // revalidate permission
    permissionService.permission.revalidate();
  }, [permissionService]);

  const workspaceDialogService = useService(WorkspaceDialogService);
  const jumpToPricePlan = useCallback(() => {
    workspaceDialogService.open('setting', {
      activeTab: 'plans',
      scrollAnchor: 'cloudPricingPlan',
    });
  }, [workspaceDialogService]);

  // debounce sync engine status
  useEffect(() => {
    const disposableOverCapacity =
      currentWorkspace.engine.blob.state$.subscribe(
        debounce(({ overCapacity }: BlobSyncState) => {
          const isOver = overCapacity;
          if (!isOver) {
            return;
          }
          if (isOwner) {
            notify.warning({
              title: t['com.lovenotes.payment.storage-limit.new-title'](),
              message:
                t[
                  'com.lovenotes.payment.storage-limit.new-description.owner'
                ](),
              actions: [
                {
                  key: 'upgrade',
                  label: t['com.lovenotes.payment.upgrade'](),
                  onClick: jumpToPricePlan,
                },
              ],
            });
          } else {
            notify.warning({
              title: t['com.lovenotes.payment.storage-limit.new-title'](),
              message:
                t['com.lovenotes.payment.storage-limit.description.member'](),
            });
          }
        })
      );
    return () => {
      disposableOverCapacity?.unsubscribe();
    };
  }, [currentWorkspace, isOwner, jumpToPricePlan, t]);

  return null;
};
