import { ArrowRightSmallIcon } from '@blocksuite/icons/rc';
import { notify } from '@lovenotes/component';
import { SettingRow } from '@lovenotes/component/setting-components';
import { ConfirmModal } from '@lovenotes/component/ui/modal';
import { useAsyncCallback } from '@lovenotes/core/components/hooks/lovenotes-async-hooks';
import { GlobalContextService } from '@lovenotes/core/modules/global-context';
import { WorkspacePermissionService } from '@lovenotes/core/modules/permissions';
import {
  WorkspaceService,
  WorkspacesService,
} from '@lovenotes/core/modules/workspace';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useServices } from '@lovenotes/infra';
import { cssVarV2 } from '@toeverything/theme/v2';
import { useCallback, useEffect, useState } from 'react';

import {
  RouteLogic,
  useNavigateHelper,
} from '../../../../../../components/hooks/use-navigate-helper';
import { WorkspaceDeleteModal } from './delete';

export const DeleteLeaveWorkspace = ({
  onCloseSetting,
}: {
  onCloseSetting?: () => void;
}) => {
  const {
    workspaceService,
    globalContextService,
    workspacePermissionService,
    workspacesService,
  } = useServices({
    WorkspaceService,
    GlobalContextService,
    WorkspacePermissionService,
    WorkspacesService,
  });
  const t = useI18n();
  const workspace = workspaceService.workspace;
  const { jumpToPage, jumpToIndex } = useNavigateHelper();
  // fixme: cloud regression
  const [showDelete, setShowDelete] = useState(false);
  const [showLeave, setShowLeave] = useState(false);

  const workspaceList = useLiveData(workspacesService.list.workspaces$);
  const currentWorkspaceId = useLiveData(
    globalContextService.globalContext.workspaceId.$
  );

  const isOwner = useLiveData(workspacePermissionService.permission.isOwner$);
  useEffect(() => {
    workspacePermissionService.permission.revalidate();
  }, [workspacePermissionService]);

  const onLeaveOrDelete = useCallback(() => {
    if (isOwner !== null) {
      if (isOwner) {
        setShowDelete(true);
      } else {
        setShowLeave(true);
      }
    }
  }, [isOwner]);

  const onDeleteConfirm = useAsyncCallback(async () => {
    onCloseSetting?.();

    if (currentWorkspaceId === workspace.id) {
      const backWorkspace = workspaceList.find(
        ws => ws.id !== currentWorkspaceId
      );
      // TODO(@eyhn): if there is no workspace, jump to a new page(wait for design)
      if (backWorkspace) {
        jumpToPage(backWorkspace?.id || '', 'all', RouteLogic.REPLACE);
      } else {
        jumpToIndex(RouteLogic.REPLACE);
      }
    }

    if (isOwner) {
      await workspacesService.deleteWorkspace(workspace.meta);
    } else {
      await workspacePermissionService.leaveWorkspace();
    }
    notify.success({ title: t['Successfully deleted']() });
  }, [
    onCloseSetting,
    currentWorkspaceId,
    workspace.id,
    workspace.meta,
    isOwner,
    t,
    workspaceList,
    jumpToPage,
    jumpToIndex,
    workspacesService,
    workspacePermissionService,
  ]);

  return (
    <>
      <SettingRow
        name={
          <span style={{ color: cssVarV2('status/error') }}>
            {isOwner
              ? t['com.lovenotes.workspaceDelete.title']()
              : t['com.lovenotes.deleteLeaveWorkspace.leave']()}
          </span>
        }
        desc={t['com.lovenotes.deleteLeaveWorkspace.description']()}
        style={{ cursor: 'pointer' }}
        onClick={onLeaveOrDelete}
        data-testid="delete-workspace-button"
      >
        <ArrowRightSmallIcon />
      </SettingRow>
      {isOwner ? (
        <WorkspaceDeleteModal
          onConfirm={onDeleteConfirm}
          open={showDelete}
          onOpenChange={setShowDelete}
          workspaceMetadata={workspace.meta}
        />
      ) : (
        <ConfirmModal
          open={showLeave}
          cancelText={t['com.lovenotes.confirmModal.button.cancel']()}
          onConfirm={onDeleteConfirm}
          onOpenChange={setShowLeave}
          title={`${t['com.lovenotes.deleteLeaveWorkspace.leave']()}?`}
          description={t[
            'com.lovenotes.deleteLeaveWorkspace.leaveDescription'
          ]()}
          confirmText={t['Leave']()}
          confirmButtonOptions={{
            variant: 'error',
          }}
        />
      )}
    </>
  );
};
