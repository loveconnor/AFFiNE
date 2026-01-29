import { EmbedLinkedDocBlockComponent } from './embed-linked-doc-block';
import { EmbedEdgelessLinkedDocBlockComponent } from './embed-linked-doc-block/embed-edgeless-linked-doc-block';
import { EmbedSyncedDocBlockComponent } from './embed-synced-doc-block';
import { EmbedSyncedDocCard } from './embed-synced-doc-block/components/embed-synced-doc-card';
import { EmbedEdgelessSyncedDocBlockComponent } from './embed-synced-doc-block/embed-edgeless-synced-doc-block';

export function effects() {
  customElements.define('lovenotes-embed-synced-doc-card', EmbedSyncedDocCard);

  customElements.define(
    'lovenotes-embed-edgeless-linked-doc-block',
    EmbedEdgelessLinkedDocBlockComponent
  );
  customElements.define(
    'lovenotes-embed-linked-doc-block',
    EmbedLinkedDocBlockComponent
  );

  customElements.define(
    'lovenotes-embed-edgeless-synced-doc-block',
    EmbedEdgelessSyncedDocBlockComponent
  );
  customElements.define(
    'lovenotes-embed-synced-doc-block',
    EmbedSyncedDocBlockComponent
  );
}

declare global {
  interface HTMLElementTagNameMap {
    'lovenotes-embed-synced-doc-card': EmbedSyncedDocCard;
    'lovenotes-embed-synced-doc-block': EmbedSyncedDocBlockComponent;
    'lovenotes-embed-edgeless-synced-doc-block': EmbedEdgelessSyncedDocBlockComponent;
    'lovenotes-embed-linked-doc-block': EmbedLinkedDocBlockComponent;
    'lovenotes-embed-edgeless-linked-doc-block': EmbedEdgelessLinkedDocBlockComponent;
  }
}
