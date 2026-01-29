import type { Tag } from '@lovenotes/core/modules/tag';

import { TagDetailHeader } from './detail-header';

export const TagEmpty = ({ tag }: { tag: Tag }) => {
  return (
    <>
      <TagDetailHeader tag={tag} />
      Empty
    </>
  );
};
