import { CenterPeek } from './components/layout';
import { DatabaseTitle } from './components/title';
import { DatabaseBlockComponent } from './database-block';
import { DatabaseDndPreviewBlockComponent } from './database-dnd-preview-block';
import { BlockRenderer } from './detail-panel/block-renderer';
import { NoteRenderer } from './detail-panel/note-renderer';
import { CreatedTimeCell } from './properties/created-time/cell-renderer';
import { LinkCell } from './properties/link/cell-renderer';
import { RichTextCell } from './properties/rich-text/cell-renderer';
import { IconCell } from './properties/title/icon';
import { HeaderAreaTextCell } from './properties/title/text';

export function effects() {
  customElements.define('lovenotes-database-title', DatabaseTitle);
  customElements.define('data-view-header-area-icon', IconCell);
  customElements.define('lovenotes-database-link-cell', LinkCell);
  customElements.define('data-view-header-area-text', HeaderAreaTextCell);
  customElements.define('lovenotes-database-rich-text-cell', RichTextCell);
  customElements.define('lovenotes-database-created-time-cell', CreatedTimeCell);
  customElements.define('center-peek', CenterPeek);
  customElements.define('database-datasource-note-renderer', NoteRenderer);
  customElements.define('database-datasource-block-renderer', BlockRenderer);
  customElements.define('lovenotes-database', DatabaseBlockComponent);

  customElements.define(
    'lovenotes-dnd-preview-database',
    DatabaseDndPreviewBlockComponent
  );
}
