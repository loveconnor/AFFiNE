import { Button, type ButtonProps } from '@lovenotes/component';
import { generateSubscriptionCallbackLink } from '@lovenotes/core/components/hooks/lovenotes/use-subscription-notify';
import { AuthService } from '@lovenotes/core/modules/cloud';
import {
  SubscriptionPlan,
  SubscriptionRecurring,
  SubscriptionVariant,
} from '@lovenotes/graphql';
import { useI18n } from '@lovenotes/i18n';
import track from '@lovenotes/track';
import { useService } from '@toeverything/infra';
import { useCallback, useMemo } from 'react';

import { CheckoutSlot } from '../../checkout-slot';

export const AIRedeemCodeButton = (btnProps: ButtonProps) => {
  const t = useI18n();
  const authService = useService(AuthService);

  const onBeforeCheckout = useCallback(() => {
    track.$.settingsPanel.plans.checkout({
      plan: SubscriptionPlan.AI,
      recurring: SubscriptionRecurring.Yearly,
    });
  }, []);
  const checkoutOptions = useMemo(
    () => ({
      recurring: SubscriptionRecurring.Yearly,
      plan: SubscriptionPlan.AI,
      variant: SubscriptionVariant.Onetime,
      coupon: null,
      successCallbackLink: generateSubscriptionCallbackLink(
        authService.session.account$.value,
        SubscriptionPlan.AI,
        SubscriptionRecurring.Yearly
      ),
    }),
    [authService.session.account$.value]
  );

  return (
    <CheckoutSlot
      onBeforeCheckout={onBeforeCheckout}
      checkoutOptions={checkoutOptions}
      renderer={props => (
        <Button variant="primary" {...btnProps} {...props}>
          {t['com.lovenotes.payment.redeem-code']()}
        </Button>
      )}
    />
  );
};
