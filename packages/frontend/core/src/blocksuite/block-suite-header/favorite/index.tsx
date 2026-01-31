import { FavoriteTag } from '@lovenotes/core/components/page-list';
import { CompatibleFavoriteItemsAdapter } from '@lovenotes/core/modules/favorite';
import { toast } from '@lovenotes/core/utils';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@lovenotes/infra';
import { track } from '@lovenotes/track';
import { useCallback } from 'react';

export interface FavoriteButtonProps {
  pageId: string;
}

export const useFavorite = (pageId: string) => {
  const t = useI18n();
  const favAdapter = useService(CompatibleFavoriteItemsAdapter);

  const favorite = useLiveData(favAdapter.isFavorite$(pageId, 'doc'));

  const toggleFavorite = useCallback(() => {
    favAdapter.toggle(pageId, 'doc');
    toast(
      favorite
        ? t['com.lovenotes.toastMessage.removedFavorites']()
        : t['com.lovenotes.toastMessage.addedFavorites']()
    );
  }, [favorite, pageId, t, favAdapter]);

  return { favorite, toggleFavorite };
};

export const FavoriteButton = ({ pageId }: FavoriteButtonProps) => {
  const { favorite, toggleFavorite } = useFavorite(pageId);

  const handleFavorite = useCallback(() => {
    track.$.header.actions.toggleFavorite();
    toggleFavorite();
  }, [toggleFavorite]);

  return (
    <FavoriteTag
      data-testid="pin-button"
      active={!!favorite}
      onClick={handleFavorite}
    />
  );
};
