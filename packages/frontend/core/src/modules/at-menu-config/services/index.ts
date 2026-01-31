// Journal-related at-menu config removed; keep stub service to satisfy wiring.
import type { LinkedWidgetConfig } from '@blocksuite/lovenotes/widgets/linked-doc';
import { Service } from '@lovenotes/infra';

export class AtMenuConfigService extends Service {
  // Provide an empty config so callers expecting getConfig() don't crash.
  getConfig(): Partial<LinkedWidgetConfig> {
    return {};
  }
}
