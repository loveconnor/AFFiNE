import { InformationIcon } from '@blocksuite/icons/rc';
import {
  Menu,
  MenuItem,
  MenuTrigger,
  notify,
  Tooltip,
} from '@lovenotes/component';
import { useAsyncCallback } from '@lovenotes/core/components/hooks/lovenotes-async-hooks';
import { DocGrantedUsersService } from '@lovenotes/core/modules/permissions';
import { ShareInfoService } from '@lovenotes/core/modules/share-doc';
import { UserFriendlyError } from '@lovenotes/error';
import { DocRole } from '@lovenotes/graphql';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@lovenotes/infra';
import { track } from '@lovenotes/track';
import clsx from 'clsx';
import { useCallback, useMemo } from 'react';

import { PlanTag } from '../plan-tag';
import * as styles from './styles.css';

const getRoleName = (t: ReturnType<typeof useI18n>, role?: DocRole) => {
  switch (role) {
    case DocRole.Manager:
      return t['com.lovenotes.share-menu.option.permission.can-manage']();
    case DocRole.Editor:
      return t['com.lovenotes.share-menu.option.permission.can-edit']();
    case DocRole.Reader:
      return t['com.lovenotes.share-menu.option.permission.can-read']();
    case DocRole.None:
      return t['com.lovenotes.share-menu.option.permission.no-access']();
    default:
      return '';
  }
};

export const MembersPermission = ({
  openPaywallModal,
  hittingPaywall,
  disabled,
}: {
  hittingPaywall: boolean;
  openPaywallModal?: () => void;
  disabled?: boolean;
}) => {
  const t = useI18n();
  const shareInfoService = useService(ShareInfoService);
  const docGrantedUsersService = useService(DocGrantedUsersService);
  const docDefaultRole = useLiveData(
    shareInfoService.shareInfo.info$
  )?.defaultRole;
  const currentRoleName = useMemo(
    () => getRoleName(t, docDefaultRole),
    [docDefaultRole, t]
  );
  const showTips =
    docDefaultRole === DocRole.Reader ||
    docDefaultRole === DocRole.Editor ||
    docDefaultRole === DocRole.None;
  const changePermission = useAsyncCallback(
    async (docRole: DocRole) => {
      try {
        track.$.sharePanel.$.modifyDocDefaultRole({
          role: docRole,
        });
        await docGrantedUsersService.updateDocDefaultRole(docRole);
        shareInfoService.shareInfo.revalidate();
      } catch (error) {
        const err = UserFriendlyError.fromAny(error);
        notify.error({
          title: err.name,
          message: err.message,
        });
      }
    },
    [docGrantedUsersService, shareInfoService.shareInfo]
  );

  const selectManage = useCallback(() => {
    changePermission(DocRole.Manager);
  }, [changePermission]);

  const selectEdit = useCallback(() => {
    if (hittingPaywall) {
      openPaywallModal?.();
      return;
    }
    changePermission(DocRole.Editor);
  }, [changePermission, hittingPaywall, openPaywallModal]);

  const selectRead = useCallback(() => {
    if (hittingPaywall) {
      openPaywallModal?.();
      return;
    }
    changePermission(DocRole.Reader);
  }, [changePermission, hittingPaywall, openPaywallModal]);

  const selectNone = useCallback(() => {
    if (hittingPaywall) {
      openPaywallModal?.();
      return;
    }
    changePermission(DocRole.None);
  }, [changePermission, hittingPaywall, openPaywallModal]);

  return (
    <div className={styles.rowContainerStyle}>
      <div className={styles.labelStyle}>
        {t['com.lovenotes.share-menu.option.permission.label']()}
      </div>
      {disabled ? (
        <div className={clsx(styles.menuTriggerStyle, 'disable')}>
          <div className={styles.menuTriggerText}>
            {showTips ? <Tips disable={disabled} /> : null} {currentRoleName}
          </div>
        </div>
      ) : (
        <Menu
          contentOptions={{
            align: 'end',
          }}
          items={
            <>
              <MenuItem
                onSelect={selectManage}
                selected={docDefaultRole === DocRole.Manager}
              >
                <div className={styles.publicItemRowStyle}>
                  {t['com.lovenotes.share-menu.option.permission.can-manage']()}
                </div>
              </MenuItem>
              <MenuItem
                onSelect={selectEdit}
                selected={docDefaultRole === DocRole.Editor}
              >
                <div className={styles.publicItemRowStyle}>
                  <div className={styles.tagContainerStyle}>
                    {t['com.lovenotes.share-menu.option.permission.can-edit']()}
                    {hittingPaywall ? <PlanTag /> : null}
                  </div>
                </div>
              </MenuItem>
              <MenuItem
                onSelect={selectRead}
                selected={docDefaultRole === DocRole.Reader}
              >
                <div className={styles.publicItemRowStyle}>
                  <div className={styles.tagContainerStyle}>
                    {t['com.lovenotes.share-menu.option.permission.can-read']()}
                    {hittingPaywall ? <PlanTag /> : null}
                  </div>
                </div>
              </MenuItem>
              <MenuItem
                onSelect={selectNone}
                selected={docDefaultRole === DocRole.None}
              >
                <div className={styles.publicItemRowStyle}>
                  <div className={styles.tagContainerStyle}>
                    {t[
                      'com.lovenotes.share-menu.option.permission.no-access'
                    ]()}
                    {hittingPaywall ? <PlanTag /> : null}
                  </div>
                </div>
              </MenuItem>
            </>
          }
        >
          <MenuTrigger
            className={styles.menuTriggerStyle}
            variant="plain"
            suffixClassName={styles.suffixClassName}
            contentStyle={{
              width: '100%',
            }}
            prefix={showTips ? <Tips /> : undefined}
          >
            {currentRoleName}
          </MenuTrigger>
        </Menu>
      )}
    </div>
  );
};

export const Tips = ({ disable }: { disable?: boolean }) => {
  const t = useI18n();

  return (
    <Tooltip content={t['com.lovenotes.share-menu.option.permission.tips']()}>
      <InformationIcon
        className={clsx(styles.informationIcon, {
          disable: disable,
        })}
      />
    </Tooltip>
  );
};
