import { builtInTemplates as builtInEdgelessTemplates } from '@lovenotes/templates/edgeless';
import { builtInTemplates as builtInStickersTemplates } from '@lovenotes/templates/stickers';
import {
  EdgelessTemplatePanel,
  type TemplateManager,
} from '@blocksuite/lovenotes/gfx/template';

export function registerTemplates() {
  EdgelessTemplatePanel.templates.extend(
    builtInStickersTemplates as TemplateManager
  );
  EdgelessTemplatePanel.templates.extend(
    builtInEdgelessTemplates as TemplateManager
  );
}
