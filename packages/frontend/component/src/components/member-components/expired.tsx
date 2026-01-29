import { useI18n } from '@lovenotes/i18n';

import { Button } from '../../ui/button';
import { AuthPageContainer } from '../auth-components';

export const ExpiredPage = ({ onOpenLoveNotes }: { onOpenLoveNotes: () => void }) => {
  const t = useI18n();
  return (
    <AuthPageContainer
      title={t['com.lovenotes.expired.page.title']()}
      subtitle={t['com.lovenotes.expired.page.new-subtitle']()}
    >
      <Button variant="primary" size="large" onClick={onOpenLoveNotes}>
        {t['com.lovenotes.auth.open.lovenotes']()}
      </Button>
    </AuthPageContainer>
  );
};
