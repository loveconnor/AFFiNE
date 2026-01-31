import { ImportIcon, PlusIcon } from '@blocksuite/icons/rc';
import { MenuItem } from '@lovenotes/component/ui/menu';
import { DefaultServerService } from '@lovenotes/core/modules/cloud';
import { ServerFeature } from '@lovenotes/graphql';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@lovenotes/infra';

import * as styles from './index.css';

export const AddWorkspace = ({
  onAddWorkspace,
  onNewWorkspace,
}: {
  onAddWorkspace?: () => void;
  onNewWorkspace?: () => void;
}) => {
  const t = useI18n();
  const defaultServerService = useService(DefaultServerService);
  const enableLocalWorkspace = useLiveData(
    defaultServerService.server.config$.selector(
      c =>
        c.features.includes(ServerFeature.LocalWorkspace) ||
        BUILD_CONFIG.isNative
    )
  );

  return (
    <>
      {BUILD_CONFIG.isElectron && (
        <MenuItem
          block={true}
          prefixIcon={<ImportIcon />}
          prefixIconClassName={styles.prefixIcon}
          onClick={onAddWorkspace}
          data-testid="add-workspace"
          className={styles.ItemContainer}
        >
          <div className={styles.ItemText}>
            {t['com.lovenotes.workspace.local.import']()}
          </div>
        </MenuItem>
      )}
      <MenuItem
        block={true}
        prefixIcon={<PlusIcon />}
        prefixIconClassName={styles.prefixIcon}
        onClick={onNewWorkspace}
        data-testid="new-workspace"
        className={styles.ItemContainer}
      >
        <div className={styles.ItemText}>
          {enableLocalWorkspace
            ? t['com.lovenotes.workspaceList.addWorkspace.create']()
            : t['com.lovenotes.workspaceList.addWorkspace.create-cloud']()}
        </div>
      </MenuItem>
    </>
  );
};
