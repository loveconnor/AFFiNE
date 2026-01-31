import { PageHeader } from '@lovenotes/core/mobile/components';
import type { Tag } from '@lovenotes/core/modules/tag';
import { useLiveData } from '@lovenotes/infra';

import * as styles from './detail.css';

export const TagDetailHeader = ({ tag }: { tag: Tag }) => {
  const name = useLiveData(tag.value$);
  const color = useLiveData(tag.color$);
  return (
    <PageHeader className={styles.header} back>
      <div className={styles.headerContent}>
        <div className={styles.headerIcon} style={{ color }} />
        {name}
      </div>
    </PageHeader>
  );
};
