import { useAsyncCallback } from '@lovenotes/core/components/hooks/lovenotes-async-hooks';
import {
  TagListHeader,
  VirtualizedTagList,
} from '@lovenotes/core/components/page-list/tags';
import { CreateOrEditTag } from '@lovenotes/core/components/page-list/tags/create-tag';
import type { TagMeta } from '@lovenotes/core/components/page-list/types';
import {
  TagService,
  useDeleteTagConfirmModal,
} from '@lovenotes/core/modules/tag';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@lovenotes/infra';
import { useCallback, useState } from 'react';

import {
  ViewBody,
  ViewHeader,
  ViewIcon,
  ViewTitle,
} from '../../../../modules/workbench';
import { AllDocSidebarTabs } from '../layouts/all-doc-sidebar-tabs';
import { EmptyTagList } from '../page-list-empty';
import * as styles from './all-tag.css';
import { AllTagHeader } from './header';

const EmptyTagListHeader = () => {
  const [showCreateTagInput, setShowCreateTagInput] = useState(false);
  const handleOpen = useCallback(() => {
    setShowCreateTagInput(true);
  }, [setShowCreateTagInput]);

  return (
    <div>
      <TagListHeader onOpen={handleOpen} />
      <CreateOrEditTag
        open={showCreateTagInput}
        onOpenChange={setShowCreateTagInput}
      />
    </div>
  );
};

export const AllTag = () => {
  const tagList = useService(TagService).tagList;
  const tags = useLiveData(tagList.tags$);
  const tagMetas: TagMeta[] = useLiveData(tagList.tagMetas$);
  const handleDeleteTags = useDeleteTagConfirmModal();

  const onTagDelete = useAsyncCallback(
    async (tagIds: string[]) => {
      await handleDeleteTags(tagIds);
    },
    [handleDeleteTags]
  );

  const t = useI18n();

  return (
    <>
      <ViewTitle title={t['Tags']()} />
      <ViewIcon icon="tag" />
      <ViewHeader>
        <AllTagHeader />
      </ViewHeader>
      <ViewBody>
        <div className={styles.body}>
          {tags.length > 0 ? (
            <VirtualizedTagList
              tags={tags}
              tagMetas={tagMetas}
              onTagDelete={onTagDelete}
            />
          ) : (
            <EmptyTagList heading={<EmptyTagListHeader />} />
          )}
        </div>
      </ViewBody>
      <AllDocSidebarTabs />
    </>
  );
};

export const Component = () => {
  return <AllTag />;
};
