import { Button } from '@lovenotes/component';
import { AuthPageContainer } from '@lovenotes/component/auth-components';
import { useNavigateHelper } from '@lovenotes/core/components/hooks/use-navigate-helper';
import { Trans, useI18n } from '@lovenotes/i18n';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as styles from './styles.css';

/**
 * /upgrade-success page
 *
 * only on web
 */
export const Component = () => {
  const t = useI18n();
  const [params] = useSearchParams();
  const { jumpToIndex, jumpToOpenInApp } = useNavigateHelper();

  const openLoveNotes = useCallback(() => {
    if (params.get('client')) {
      return jumpToOpenInApp('bring-to-front');
    } else {
      jumpToIndex();
    }
  }, [jumpToIndex, jumpToOpenInApp, params]);

  const subtitle = (
    <div className={styles.leftContentText}>
      {t['com.lovenotes.payment.upgrade-success-page.text']()}
      <div>
        <Trans
          i18nKey={'com.lovenotes.payment.upgrade-success-page.support'}
          components={{
            1: (
              <a
                href="mailto:support@toeverything.info"
                className={styles.mail}
              />
            ),
          }}
        />
      </div>
    </div>
  );

  return (
    <AuthPageContainer
      title={t['com.lovenotes.payment.upgrade-success-page.title']()}
      subtitle={subtitle}
    >
      <Button variant="primary" size="extraLarge" onClick={openLoveNotes}>
        {t['com.lovenotes.other-page.nav.open-lovenotes']()}
      </Button>
    </AuthPageContainer>
  );
};
