import { Button } from '@lovenotes/component';
import { AuthService, ServerService } from '@lovenotes/core/modules/cloud';
import { NativePaywallService } from '@lovenotes/core/modules/paywall';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@lovenotes/infra';

import * as styles from './styles.css';

export const UserSubscription = () => {
  const serverService = useService(ServerService);
  const authService = useService(AuthService);
  const nativePaywallProvider =
    useService(NativePaywallService).getNativePaywallProvider();
  const t = useI18n();

  const supported = useLiveData(
    serverService.server.features$.map(f => f.payment)
  );

  const loggedIn = useLiveData(authService.session.status$) === 'authenticated';

  if (!loggedIn) {
    return null;
  }

  if (!supported) {
    // TODO: enable this
    // return null;
  }

  if (!nativePaywallProvider) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.title}>
          {t['com.lovenotes.payment.subscription.title']()}
        </div>
        <div className={styles.description}>
          {t['com.lovenotes.payment.subscription.description']()}
        </div>
      </div>
      <Button
        className={styles.button}
        variant="primary"
        onClick={() =>
          void nativePaywallProvider.showPaywall('Pro').catch(console.error)
        }
      >
        {t['com.lovenotes.payment.subscription.button']()}
      </Button>
    </div>
  );
};
