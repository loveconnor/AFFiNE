import { Button, notify } from '@lovenotes/component';
import { SettingRow } from '@lovenotes/component/setting-components';
import { useAsyncCallback } from '@lovenotes/core/components/hooks/lovenotes-async-hooks';
import { useMutation } from '@lovenotes/core/components/hooks/use-mutation';
import { UrlService } from '@lovenotes/core/modules/url';
import { UserFriendlyError } from '@lovenotes/error';
import { createCustomerPortalMutation } from '@lovenotes/graphql';
import { useI18n } from '@lovenotes/i18n';
import { useService } from '@lovenotes/infra';

import * as styles from './styles.css';

export const PaymentMethodUpdater = () => {
  const { isMutating, trigger } = useMutation({
    mutation: createCustomerPortalMutation,
  });
  const urlService = useService(UrlService);
  const t = useI18n();

  const update = useAsyncCallback(async () => {
    await trigger(null, {
      onSuccess: data => {
        urlService.openExternal(data.createCustomerPortal);
      },
    }).catch(e => {
      const userFriendlyError = UserFriendlyError.fromAny(e);
      notify.error(userFriendlyError);
    });
  }, [trigger, urlService]);

  return (
    <SettingRow
      className={styles.paymentMethod}
      name={t['com.lovenotes.payment.billing-setting.payment-method']()}
      desc={t[
        'com.lovenotes.payment.billing-setting.payment-method.description'
      ]()}
    >
      <Button onClick={update} loading={isMutating} disabled={isMutating}>
        {t['com.lovenotes.payment.billing-setting.payment-method.go']()}
      </Button>
    </SettingRow>
  );
};
