import type { FeatureFlagService } from '@lovenotes/core/modules/feature-flag';
import { WithDisposable } from '@blocksuite/lovenotes/global/lit';
import type { ColorScheme } from '@blocksuite/lovenotes/model';
import { ShadowlessElement } from '@blocksuite/lovenotes/std';
import type { ExtensionType } from '@blocksuite/lovenotes/store';
import type { Signal } from '@preact/signals-core';
import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { createTextRenderer } from '../../components/text-renderer';

export class ChatContentRichText extends WithDisposable(ShadowlessElement) {
  @property({ attribute: false })
  accessor text!: string;

  @property({ attribute: false })
  accessor state: 'finished' | 'generating' = 'finished';

  @property({ attribute: false })
  accessor extensions!: ExtensionType[];

  @property({ attribute: false })
  accessor lovenotesFeatureFlagService!: FeatureFlagService;

  @property({ attribute: false })
  accessor theme!: Signal<ColorScheme>;

  protected override render() {
    const { text } = this;
    return html`${createTextRenderer({
      customHeading: true,
      extensions: this.extensions,
      lovenotesFeatureFlagService: this.lovenotesFeatureFlagService,
      theme: this.theme,
    })(text, this.state)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chat-content-rich-text': ChatContentRichText;
  }
}
