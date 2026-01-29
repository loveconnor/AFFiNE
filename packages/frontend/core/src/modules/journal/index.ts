import type { Framework } from '@toeverything/infra';

import { WorkspaceScope } from '../workspace';
import { JournalService } from './services/journal';

// Journal module stubbed/disabled but still registered to satisfy dependencies.
export function configureJournalModule(framework: Framework) {
  framework.scope(WorkspaceScope).service(JournalService);
}

export {
  JOURNAL_DATE_FORMAT,
  JournalService,
  type MaybeDate,
} from './services/journal';
