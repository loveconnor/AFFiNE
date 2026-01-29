import { MenuLinkItem } from '@lovenotes/core/modules/app-sidebar/views';
import { DocDisplayMetaService } from '@lovenotes/core/modules/doc-display-meta';
import { JournalService } from '@lovenotes/core/modules/journal';
import { WorkbenchService } from '@lovenotes/core/modules/workbench';
import { useI18n } from '@lovenotes/i18n';
import { TodayIcon } from '@blocksuite/icons/rc';
import { useLiveData, useService } from '@toeverything/infra';

export const AppSidebarJournalButton = () => {
  const t = useI18n();
  const docDisplayMetaService = useService(DocDisplayMetaService);
  const journalService = useService(JournalService);
  const workbench = useService(WorkbenchService).workbench;
  const location = useLiveData(workbench.location$);
  const maybeDocId = location.pathname.split('/')[1];
  const isJournal = !!useLiveData(journalService.journalDate$(maybeDocId));

  const JournalIcon = useLiveData(docDisplayMetaService.icon$(maybeDocId));
  const Icon = isJournal ? JournalIcon : TodayIcon;

  return (
    <MenuLinkItem
      data-testid="slider-bar-journals-button"
      active={isJournal || location.pathname.startsWith('/journals')}
      to={'/journals'}
      icon={<Icon />}
    >
      {t['com.lovenotes.journal.app-sidebar-title']()}
    </MenuLinkItem>
  );
};
