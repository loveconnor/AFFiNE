import { IntegrationTypeIcon } from '@lovenotes/core/modules/integration';
import type { I18nString } from '@lovenotes/i18n';
import { Logo1Icon, TodayIcon } from '@blocksuite/icons/rc';
import type { ReactNode } from 'react';

import { CalendarSettingPanel } from './calendar/setting-panel';
import MCPIcon from './mcp-server/MCP.inline.svg';
import { McpServerSettingPanel } from './mcp-server/setting-panel';
import { ReadwiseSettingPanel } from './readwise/setting-panel';

type IntegrationCard = {
  id: string;
  name: I18nString;
  desc: I18nString;
  icon: ReactNode;
  cloud?: boolean;
} & (
  | {
      setting: ReactNode;
    }
  | {
      link: string;
    }
);

const INTEGRATION_LIST = [
  {
    id: 'readwise' as const,
    name: 'com.lovenotes.integration.readwise.name',
    desc: 'com.lovenotes.integration.readwise.desc',
    icon: <IntegrationTypeIcon type="readwise" />,
    setting: <ReadwiseSettingPanel />,
  },
  {
    id: 'calendar' as const,
    name: 'com.lovenotes.integration.calendar.name',
    desc: 'com.lovenotes.integration.calendar.desc',
    icon: <TodayIcon />,
    setting: <CalendarSettingPanel />,
    cloud: true,
  },
  {
    id: 'mcp-server' as const,
    name: 'com.lovenotes.integration.mcp-server.name',
    desc: 'com.lovenotes.integration.mcp-server.desc',
    icon: <img src={MCPIcon} />,
    setting: <McpServerSettingPanel />,
    cloud: true,
  },
  {
    id: 'web-clipper' as const,
    name: 'com.lovenotes.integration.web-clipper.name',
    desc: 'com.lovenotes.integration.web-clipper.desc',
    icon: <Logo1Icon />,
    link: 'https://chromewebstore.google.com/detail/lovenotes-web-clipper/mpbbkmbdpleomiogkbkkpfoljjpahmoi',
  },
] satisfies (IntegrationCard | false)[];

type IntegrationId = Exclude<
  Extract<(typeof INTEGRATION_LIST)[number], {}>,
  false
>['id'];

export type IntegrationItem = Exclude<IntegrationCard, 'id'> & {
  id: IntegrationId;
};

export function getAllowedIntegrationList(isCloudWorkspace: boolean) {
  return INTEGRATION_LIST.filter(item => {
    if (!item) return false;
    const requiredCloud = 'cloud' in item && item.cloud;
    if (requiredCloud && !isCloudWorkspace) return false;
    return true;
  }) as IntegrationItem[];
}
