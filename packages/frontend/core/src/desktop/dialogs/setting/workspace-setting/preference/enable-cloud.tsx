import { SettingRow } from '@lovenotes/component/setting-components';
import { Button } from '@lovenotes/component/ui/button';
import { useEnableCloud } from '@lovenotes/core/components/hooks/lovenotes/use-enable-cloud';
import {
  type Workspace,
  WorkspaceService,
} from '@lovenotes/core/modules/workspace';
import { UNTITLED_WORKSPACE_NAME } from '@lovenotes/env/constant';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@toeverything/infra';
import { useCallback } from 'react';

export interface PublishPanelProps {
  workspace: Workspace | null;
}

export const EnableCloudPanel = ({
  onCloseSetting,
}: {
  onCloseSetting?: () => void;
}) => {
  return null;
};
