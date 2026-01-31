import { EmptyCollections } from '@lovenotes/core/components/lovenotes/empty';
import { CollectionService } from '@lovenotes/core/modules/collection';
import { useLiveData, useService } from '@lovenotes/infra';

import { CollectionListItem } from './item';
import { list } from './styles.css';

export const CollectionList = () => {
  const collectionService = useService(CollectionService);
  const collectionMetas = useLiveData(collectionService.collectionMetas$);

  if (!collectionMetas.length) {
    return <EmptyCollections absoluteCenter />;
  }

  return (
    <ul className={list}>
      {collectionMetas.map(meta => (
        <CollectionListItem key={meta.id} meta={meta} />
      ))}
    </ul>
  );
};
