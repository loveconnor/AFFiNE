import { Button } from '@lovenotes/component';
import { SettingRow } from '@lovenotes/component/setting-components';
import { getUpgradeQuestionnaireLink } from '@lovenotes/core/components/hooks/lovenotes/use-subscription-notify';
import {
  AuthService,
  WorkspaceSubscriptionService,
} from '@lovenotes/core/modules/cloud';
import { SubscriptionPlan, SubscriptionRecurring } from '@lovenotes/graphql';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@lovenotes/infra';

import * as styles from './styles.css';

export const TypeformLink = () => {
  const t = useI18n();
  const workspaceSubscriptionService = useService(WorkspaceSubscriptionService);
  const authService = useService(AuthService);

  const workspaceSubscription = useLiveData(
    workspaceSubscriptionService.subscription.subscription$
  );
  const account = useLiveData(authService.session.account$);

  if (!account) return null;

  const link = getUpgradeQuestionnaireLink({
    name: account.info?.name,
    id: account.id,
    email: account.email,
    recurring: workspaceSubscription?.recurring ?? SubscriptionRecurring.Yearly,
    plan: SubscriptionPlan.Team,
  });

  return (
    <SettingRow
      className={styles.paymentMethod}
      name={t['com.lovenotes.payment.billing-type-form.title']()}
      desc={t['com.lovenotes.payment.billing-type-form.description']()}
    >
      <a target="_blank" href={link} rel="noreferrer">
        <Button>{t['com.lovenotes.payment.billing-type-form.go']()}</Button>
      </a>
    </SettingRow>
  );
};
