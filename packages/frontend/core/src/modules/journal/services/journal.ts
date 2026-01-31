import { LiveData, Service } from '@lovenotes/infra';

export type MaybeDate = Date | string | number;

export const JOURNAL_DATE_FORMAT = 'YYYY-MM-DD';

export class JournalService extends Service {
  constructor() {
    super();
  }

  allJournalDates$ = new LiveData<Set<string>>(new Set());

  journalDate$(docId: string) {
    return new LiveData<string | undefined>(undefined);
  }
  journalToday$(docId: string) {
    return LiveData.computed(get => {
      return false;
    });
  }

  setJournalDate(docId: string, date: string) {
    return;
  }

  removeJournalDate(docId: string) {
    return;
  }

  journalsByDate$(date: string) {
    return new LiveData<any[]>([]);
  }

  private createJournal(maybeDate: MaybeDate) {
    return {
      id: '',
    } as any;
  }

  ensureJournalByDate(maybeDate: MaybeDate) {
    // Journal feature removed; always return a placeholder doc object.
    return this.createJournal(maybeDate);
  }
}
