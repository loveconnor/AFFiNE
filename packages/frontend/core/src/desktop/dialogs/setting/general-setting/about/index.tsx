import { ArrowRightSmallIcon, OpenInNewIcon } from '@blocksuite/icons/rc';
import { Switch } from '@lovenotes/component';
import {
  SettingHeader,
  SettingRow,
  SettingWrapper,
} from '@lovenotes/component/setting-components';
import { useAppUpdater } from '@lovenotes/core/components/hooks/use-app-updater';
import { UrlService } from '@lovenotes/core/modules/url';
import { appIconMap, appNames } from '@lovenotes/core/utils/channel';
import { useI18n } from '@lovenotes/i18n';
import { useServices } from '@toeverything/infra';
import { useCallback } from 'react';

import { useAppSettingHelper } from '../../../../../components/hooks/lovenotes/use-app-setting-helper';
import { relatedLinks } from './config';
import * as styles from './style.css';
import { UpdateCheckSection } from './update-check-section';

export const AboutLoveNotes = () => null;
