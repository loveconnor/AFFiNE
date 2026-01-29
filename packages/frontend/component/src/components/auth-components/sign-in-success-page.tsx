import { useI18n } from '@lovenotes/i18n';
import type { FC } from 'react';

import { Button } from '../../ui/button';
import { AuthPageContainer } from './auth-page-container';

export const SignInSuccessPage: FC<{
  onOpenLoveNotes: () => void;
}> = ({ onOpenLoveNotes }) => {
  const t = useI18n();
  return (
    <AuthPageContainer
      title={t['com.lovenotes.auth.signed.success.title']()}
      subtitle={t['com.lovenotes.auth.signed.success.subtitle']()}
    >
      <Button variant="primary" size="large" onClick={onOpenLoveNotes}>
        {t['com.lovenotes.auth.open.lovenotes']()}
      </Button>
    </AuthPageContainer>
  );
};
