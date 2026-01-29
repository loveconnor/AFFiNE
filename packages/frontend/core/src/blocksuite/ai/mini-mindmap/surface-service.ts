import { SurfaceBlockSchema } from '@blocksuite/lovenotes/blocks/surface';
import { BlockService } from '@blocksuite/lovenotes/std';

export class MindmapSurfaceBlockService extends BlockService {
  static override readonly flavour = SurfaceBlockSchema.model.flavour;
}
