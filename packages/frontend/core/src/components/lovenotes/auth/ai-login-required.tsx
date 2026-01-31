import { useConfirmModal } from '@lovenotes/component';
import { GlobalDialogService } from '@lovenotes/core/modules/dialogs';
import { useI18n } from '@lovenotes/i18n';
import { useService } from '@lovenotes/infra';
import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';

export const showAILoginRequiredAtom = atom(false);

export const AiLoginRequiredModal = () => {
  const t = useI18n();
  const [open, setOpen] = useAtom(showAILoginRequiredAtom);
  const globalDialogService = useService(GlobalDialogService);
  const { openConfirmModal, closeConfirmModal } = useConfirmModal();

  const openSignIn = useCallback(() => {
    globalDialogService.open('sign-in', {});
  }, [globalDialogService]);

  useEffect(() => {
    if (open) {
      openConfirmModal({
        title: t['com.lovenotes.ai.login-required.dialog-title'](),
        description: t['com.lovenotes.ai.login-required.dialog-content'](),
        onConfirm: () => {
          setOpen(false);
          openSignIn();
        },
        confirmText: t['com.lovenotes.ai.login-required.dialog-confirm'](),
        confirmButtonOptions: {
          variant: 'primary',
        },
        cancelText: t['com.lovenotes.ai.login-required.dialog-cancel'](),
        onOpenChange: setOpen,
      });
    } else {
      closeConfirmModal();
    }
  }, [closeConfirmModal, open, openConfirmModal, openSignIn, setOpen, t]);

  return null;
};
