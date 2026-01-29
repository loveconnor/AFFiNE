import { useI18n } from '@lovenotes/i18n';

import tagsDark from './assets/tag-list.dark.png';
import tagsLight from './assets/tag-list.light.png';
import { EmptyLayout } from './layout';
import type { UniversalEmptyProps } from './types';

export const EmptyTags = (props: UniversalEmptyProps) => {
  const t = useI18n();

  return (
    <EmptyLayout
      illustrationLight={tagsLight}
      illustrationDark={tagsDark}
      title={t['com.lovenotes.empty.tags.title']()}
      description={t['com.lovenotes.empty.tags.description']()}
      {...props}
    />
  );
};
