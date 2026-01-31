import { MenuItem } from '@lovenotes/component';
import { IsFavoriteIcon } from '@lovenotes/core/components/pure/icons';
import { CompatibleFavoriteItemsAdapter } from '@lovenotes/core/modules/favorite';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@lovenotes/infra';
import { useMemo } from 'react';

export const FavoriteFolderOperation = ({ id }: { id: string }) => {
  const t = useI18n();
  const compatibleFavoriteItemsAdapter = useService(
    CompatibleFavoriteItemsAdapter
  );

  const favorite = useLiveData(
    useMemo(() => {
      return compatibleFavoriteItemsAdapter.isFavorite$(id, 'folder');
    }, [compatibleFavoriteItemsAdapter, id])
  );

  return (
    <MenuItem
      prefixIcon={<IsFavoriteIcon favorite={favorite} />}
      onClick={() => compatibleFavoriteItemsAdapter.toggle(id, 'folder')}
    >
      {favorite
        ? t['com.lovenotes.rootAppSidebar.organize.folder-rm-favorite']()
        : t['com.lovenotes.rootAppSidebar.organize.folder-add-favorite']()}
    </MenuItem>
  );
};
