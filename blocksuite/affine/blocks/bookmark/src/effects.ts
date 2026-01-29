import { BookmarkBlockComponent } from './bookmark-block';
import { BookmarkEdgelessBlockComponent } from './bookmark-edgeless-block';
import { BookmarkCard } from './components/bookmark-card';

export function effects() {
  customElements.define(
    'lovenotes-edgeless-bookmark',
    BookmarkEdgelessBlockComponent
  );
  customElements.define('lovenotes-bookmark', BookmarkBlockComponent);
  customElements.define('bookmark-card', BookmarkCard);
}
