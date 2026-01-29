import { Button, type ButtonProps, useConfirmModal } from '@lovenotes/component';
import { useDowngradeNotify } from '@lovenotes/core/components/lovenotes/subscription-landing/notify';
import { getDowngradeQuestionnaireLink } from '@lovenotes/core/components/hooks/lovenotes/use-subscription-notify';
import { useAsyncCallback } from '@lovenotes/core/components/hooks/lovenotes-async-hooks';
import { AuthService, SubscriptionService } from '@lovenotes/core/modules/cloud';
import { SubscriptionPlan } from '@lovenotes/graphql';
import { useI18n } from '@lovenotes/i18n';
import { track } from '@lovenotes/track';
import { useService } from '@toeverything/infra';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const AICancel = (btnProps: ButtonProps) => {
  const t = useI18n();
  const [isMutating, setMutating] = useState(false);
  const [idempotencyKey, setIdempotencyKey] = useState(nanoid());
  const subscription = useService(SubscriptionService).subscription;
  const authService = useService(AuthService);

  const { openConfirmModal } = useConfirmModal();
  const downgradeNotify = useDowngradeNotify();

  const cancel = useAsyncCallback(async () => {
    const aiSubscription = subscription.ai$.value;
    if (aiSubscription) {
      track.$.settingsPanel.plans.cancelSubscription({
        plan: SubscriptionPlan.AI,
        recurring: aiSubscription.recurring,
      });
    }
    openConfirmModal({
      title: t['com.lovenotes.payment.ai.action.cancel.confirm.title'](),
      description:
        t['com.lovenotes.payment.ai.action.cancel.confirm.description'](),
      reverseFooter: true,
      confirmText:
        t['com.lovenotes.payment.ai.action.cancel.confirm.confirm-text'](),
      confirmButtonOptions: {
        variant: 'secondary',
      },
      cancelText:
        t['com.lovenotes.payment.ai.action.cancel.confirm.cancel-text'](),
      cancelButtonOptions: {
        variant: 'primary',
      },
      onConfirm: async () => {
        try {
          setMutating(true);
          await subscription.cancelSubscription(
            idempotencyKey,
            SubscriptionPlan.AI
          );
          setIdempotencyKey(nanoid());
          track.$.settingsPanel.plans.confirmCancelingSubscription({
            plan: SubscriptionPlan.AI,
            recurring: aiSubscription?.recurring,
          });
          const account = authService.session.account$.value;
          const prevRecurring = subscription.ai$.value?.recurring;
          if (account && prevRecurring) {
            downgradeNotify(
              getDowngradeQuestionnaireLink({
                email: account.email,
                name: account.info?.name,
                id: account.id,
                plan: SubscriptionPlan.AI,
                recurring: prevRecurring,
              })
            );
          }
        } finally {
          setMutating(false);
        }
      },
    });
  }, [
    subscription,
    openConfirmModal,
    t,
    idempotencyKey,
    authService.session.account$.value,
    downgradeNotify,
  ]);

  return (
    <Button
      onClick={cancel}
      loading={isMutating}
      variant="secondary"
      {...btnProps}
    >
      {t['com.lovenotes.payment.ai.action.cancel.button-label']()}
    </Button>
  );
};
