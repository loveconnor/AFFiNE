import { IconPicker, uniReactRoot } from '@lovenotes/component';
// Import the identifier for internal use
import { type IconPickerService as IIconPickerService } from '@blocksuite/lovenotes-shared/services';
import { Service } from '@toeverything/infra';

// Re-export types from BlockSuite shared services
export type {
  IconData,
  IconPickerService as IIconPickerService,
} from '@blocksuite/lovenotes-shared/services';
export { IconPickerServiceIdentifier } from '@blocksuite/lovenotes-shared/services';

export class IconPickerService extends Service implements IIconPickerService {
  public readonly iconPickerComponent =
    uniReactRoot.createUniComponent(IconPicker);
}
