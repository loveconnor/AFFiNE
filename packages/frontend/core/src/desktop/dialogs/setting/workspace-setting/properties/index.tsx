import { Button, Menu } from '@lovenotes/component';
import { SettingHeader } from '@lovenotes/component/setting-components';
import { useWorkspaceInfo } from '@lovenotes/core/components/hooks/use-workspace-info';
import { WorkspacePropertyManager } from '@lovenotes/core/components/properties/manager';
import { CreatePropertyMenuItems } from '@lovenotes/core/components/properties/menu/create-doc-property';
import type { DocCustomPropertyInfo } from '@lovenotes/core/modules/db';
import { WorkspaceService } from '@lovenotes/core/modules/workspace';
import { Trans, useI18n } from '@lovenotes/i18n';
import track from '@lovenotes/track';
import { FrameworkScope, useService } from '@toeverything/infra';
import { useCallback } from 'react';

import * as styles from './styles.css';

const WorkspaceSettingPropertiesMain = () => {
  const t = useI18n();

  const onCreated = useCallback((property: DocCustomPropertyInfo) => {
    track.$.settingsPanel.workspace.addProperty({
      type: property.type,
      control: 'at menu',
    });
  }, []);

  const onPropertyInfoChange = useCallback(
    (property: DocCustomPropertyInfo, field: string) => {
      track.$.settingsPanel.workspace.editPropertyMeta({
        type: property.type,
        field,
      });
    },
    []
  );

  return (
    <div className={styles.main}>
      <div className={styles.listHeader}>
        <Menu items={<CreatePropertyMenuItems onCreated={onCreated} />}>
          <Button variant="primary">
            {t['com.lovenotes.settings.workspace.properties.add_property']()}
          </Button>
        </Menu>
      </div>
      <WorkspacePropertyManager onPropertyInfoChange={onPropertyInfoChange} />
    </div>
  );
};

export const WorkspaceSettingProperties = () => {
  const t = useI18n();
  const workspace = useService(WorkspaceService).workspace;
  const workspaceInfo = useWorkspaceInfo(workspace);
  const title = workspaceInfo?.name || 'untitled';

  if (workspace === null) {
    return null;
  }

  return (
    <FrameworkScope scope={workspace.scope}>
      <SettingHeader
        title={t['com.lovenotes.settings.workspace.properties.header.title']()}
        subtitle={
          <Trans
            values={{
              name: title,
            }}
            i18nKey="com.lovenotes.settings.workspace.properties.header.subtitle"
          >
            Manage workspace <strong>name</strong> properties
          </Trans>
        }
      />
      <WorkspaceSettingPropertiesMain />
    </FrameworkScope>
  );
};
