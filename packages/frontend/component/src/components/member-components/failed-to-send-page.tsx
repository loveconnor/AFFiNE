import {
  AuthPageContainer,
  type User,
} from '@lovenotes/component/auth-components';
import type { GetInviteInfoQuery } from '@lovenotes/graphql';
import { Trans, useI18n } from '@lovenotes/i18n';

import { Avatar } from '../../ui/avatar';
import * as styles from './styles.css';
export const FailedToSendPage = ({
  user,
  inviteInfo,
}: {
  user: User | null;
  inviteInfo: GetInviteInfoQuery['getInviteInfo'];
}) => {
  const t = useI18n();
  return (
    <AuthPageContainer
      title={t['com.lovenotes.failed-to-send-request.title']()}
      subtitle={
        <div className={styles.lineHeight}>
          <Trans
            i18nKey="com.lovenotes.failed-to-send-request.description"
            components={{
              1: (
                <div className={styles.avatarWrapper}>
                  <Avatar
                    url={`data:image/png;base64,${inviteInfo.workspace.avatar}`}
                    name={inviteInfo.workspace.name}
                    size={20}
                    colorfulFallback
                  />
                </div>
              ),
              2: <span className={styles.inviteName} />,
              3: <span className={styles.inviteName} />,
            }}
            values={{
              workspaceName: inviteInfo.workspace.name,
              userEmail: user?.email,
            }}
          />
        </div>
      }
    ></AuthPageContainer>
  );
};
