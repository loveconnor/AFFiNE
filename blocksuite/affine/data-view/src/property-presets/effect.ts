import { CheckboxCell } from './checkbox/cell-renderer.js';
import { DateCell } from './date/cell-renderer.js';
import { ImageCell } from './image/cell-renderer.js';
import { MultiSelectCell } from './multi-select/cell-renderer.js';
import { NumberCell } from './number/cell-renderer.js';
import { ProgressCell } from './progress/cell-renderer.js';
import { SelectCell } from './select/cell-renderer.js';
import { TextCell } from './text/cell-renderer.js';

export function propertyPresetsEffects() {
  customElements.define('lovenotes-database-checkbox-cell', CheckboxCell);
  customElements.define('lovenotes-database-date-cell', DateCell);
  customElements.define('lovenotes-database-image-cell', ImageCell);
  customElements.define('lovenotes-database-multi-select-cell', MultiSelectCell);
  customElements.define('lovenotes-database-number-cell', NumberCell);
  customElements.define('lovenotes-database-progress-cell', ProgressCell);
  customElements.define('lovenotes-database-select-cell', SelectCell);
  customElements.define('lovenotes-database-text-cell', TextCell);
}
