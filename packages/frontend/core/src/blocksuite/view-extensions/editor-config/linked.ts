import type { LinkedWidgetConfig } from '@blocksuite/lovenotes/widgets/linked-doc';
import { AtMenuConfigService } from '@lovenotes/core/modules/at-menu-config/services';
import { type FrameworkProvider } from '@lovenotes/infra';

export function createLinkedWidgetConfig(
  framework: FrameworkProvider
): Partial<LinkedWidgetConfig> | undefined {
  const service = framework.getOptional(AtMenuConfigService);
  if (!service) return;
  return service.getConfig();
}
