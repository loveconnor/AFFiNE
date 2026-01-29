import { Button } from '@lovenotes/component';
import { useJournalRouteHelper } from '@lovenotes/core/components/hooks/use-journal';
import { useI18n } from '@lovenotes/i18n';
import { useCallback } from 'react';

export const JournalTodayButton = () => {
  const t = useI18n();
  const journalHelper = useJournalRouteHelper();

  const onToday = useCallback(() => {
    journalHelper.openToday({
      replaceHistory: true,
    });
  }, [journalHelper]);

  return (
    <Button
      size="default"
      onClick={onToday}
      style={{ height: 32, padding: '0px 8px' }}
    >
      {t['com.lovenotes.today']()}
    </Button>
  );
};
