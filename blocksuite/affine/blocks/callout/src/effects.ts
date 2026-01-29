import { CalloutBlockComponent } from './callout-block';
import { IconPickerWrapper } from './icon-picker-wrapper';

export function effects() {
  customElements.define('lovenotes-callout', CalloutBlockComponent);
  customElements.define('icon-picker-wrapper', IconPickerWrapper);
}

declare global {
  interface HTMLElementTagNameMap {
    'lovenotes-callout': CalloutBlockComponent;
    'icon-picker-wrapper': IconPickerWrapper;
  }
}
