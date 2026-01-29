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
import { ArrowRightSmallIcon, OpenInNewIcon } from '@blocksuite/icons/rc';
import { useServices } from '@toeverything/infra';
import { useCallback } from 'react';

import { useAppSettingHelper } from '../../../../../components/hooks/lovenotes/use-app-setting-helper';
import { relatedLinks } from './config';
import * as styles from './style.css';
import { UpdateCheckSection } from './update-check-section';

export const AboutLoveNotes = () => {
  const t = useI18n();
  const { appSettings, updateSettings } = useAppSettingHelper();
  const { toggleAutoCheck, toggleAutoDownload } = useAppUpdater();
  const channel = BUILD_CONFIG.appBuildType;
  const appIcon = appIconMap[channel];
  const appName = appNames[channel];
  const { urlService } = useServices({
    UrlService,
  });

  const onSwitchAutoCheck = useCallback(
    (checked: boolean) => {
      toggleAutoCheck(checked);
      updateSettings('autoCheckUpdate', checked);
    },
    [toggleAutoCheck, updateSettings]
  );

  const onSwitchAutoDownload = useCallback(
    (checked: boolean) => {
      toggleAutoDownload(checked);
      updateSettings('autoDownloadUpdate', checked);
    },
    [toggleAutoDownload, updateSettings]
  );

  const onSwitchTelemetry = useCallback(
    (checked: boolean) => {
      updateSettings('enableTelemetry', checked);
    },
    [updateSettings]
  );

  return (
    <>
      <SettingHeader
        title={t['com.lovenotes.aboutLoveNotes.title']()}
        subtitle={t['com.lovenotes.aboutLoveNotes.subtitle']()}
        data-testid="about-title"
      />
      <SettingWrapper title={t['com.lovenotes.aboutLoveNotes.version.title']()}>
        <SettingRow
          name={appName}
          desc={BUILD_CONFIG.appVersion}
          className={styles.appImageRow}
        >
          <img src={appIcon} alt={appName} width={56} height={56} />
        </SettingRow>
        <SettingRow
          name={t['com.lovenotes.aboutLoveNotes.version.editor.title']()}
          desc={BUILD_CONFIG.editorVersion}
        />
        {BUILD_CONFIG.isElectron ? (
          <>
            <UpdateCheckSection />
            <SettingRow
              name={t['com.lovenotes.aboutLoveNotes.autoCheckUpdate.title']()}
              desc={t['com.lovenotes.aboutLoveNotes.autoCheckUpdate.description']()}
            >
              <Switch
                checked={appSettings.autoCheckUpdate}
                onChange={onSwitchAutoCheck}
              />
            </SettingRow>
            <SettingRow
              name={t['com.lovenotes.aboutLoveNotes.autoDownloadUpdate.title']()}
              desc={t[
                'com.lovenotes.aboutLoveNotes.autoDownloadUpdate.description'
              ]()}
            >
              <Switch
                checked={appSettings.autoDownloadUpdate}
                onChange={onSwitchAutoDownload}
              />
            </SettingRow>
            <SettingRow
              name={t['com.lovenotes.aboutLoveNotes.changelog.title']()}
              desc={t['com.lovenotes.aboutLoveNotes.changelog.description']()}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                urlService.openPopupWindow(BUILD_CONFIG.changelogUrl);
              }}
            >
              <ArrowRightSmallIcon />
            </SettingRow>
          </>
        ) : null}
        <SettingRow
          name={t['com.lovenotes.telemetry.enable']()}
          desc={t['com.lovenotes.telemetry.enable.desc']()}
        >
          <Switch
            checked={appSettings.enableTelemetry !== false}
            onChange={onSwitchTelemetry}
          />
        </SettingRow>
      </SettingWrapper>
      <SettingWrapper title={t['com.lovenotes.aboutLoveNotes.contact.title']()}>
        <a
          className={styles.link}
          rel="noreferrer"
          href="https://lovenotes.pro"
          target="_blank"
        >
          {t['com.lovenotes.aboutLoveNotes.contact.website']()}
          <OpenInNewIcon className="icon" />
        </a>
        <a
          className={styles.link}
          rel="noreferrer"
          href="https://community.lovenotes.pro"
          target="_blank"
        >
          {t['com.lovenotes.aboutLoveNotes.contact.community']()}
          <OpenInNewIcon className="icon" />
        </a>
      </SettingWrapper>
      <SettingWrapper title={t['com.lovenotes.aboutLoveNotes.community.title']()}>
        <div className={styles.communityWrapper}>
          {relatedLinks.map(({ icon, title, link }) => {
            return (
              <div
                className={styles.communityItem}
                onClick={() => {
                  urlService.openPopupWindow(link);
                }}
                key={title}
              >
                {icon}
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </SettingWrapper>
      <SettingWrapper title={t['com.lovenotes.aboutLoveNotes.legal.title']()}>
        <a
          className={styles.link}
          rel="noreferrer"
          href="https://lovenotes.pro/privacy"
          target="_blank"
        >
          {t['com.lovenotes.aboutLoveNotes.legal.privacy']()}
          <OpenInNewIcon className="icon" />
        </a>
        <a
          className={styles.link}
          rel="noreferrer"
          href="https://lovenotes.pro/terms"
          target="_blank"
        >
          {t['com.lovenotes.aboutLoveNotes.legal.tos']()}
          <OpenInNewIcon className="icon" />
        </a>
      </SettingWrapper>
    </>
  );
};
