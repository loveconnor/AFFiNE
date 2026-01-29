import { OverlayModal } from '@lovenotes/component';
import { useI18n } from '@lovenotes/i18n';

export const StarLoveNotesModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const t = useI18n();

  return (
    <OverlayModal
      open={open}
      topImage={
        <video
          width={400}
          height={300}
          style={{ objectFit: 'cover' }}
          src={'/static/githubStar.mp4'}
          autoPlay
          loop
        />
      }
      title={t['com.lovenotes.star-lovenotes.title']()}
      onOpenChange={setOpen}
      description={t['com.lovenotes.star-lovenotes.description']()}
      cancelText={t['com.lovenotes.star-lovenotes.cancel']()}
      to={BUILD_CONFIG.githubUrl}
      confirmButtonOptions={{
        variant: 'primary',
      }}
      confirmText={t['com.lovenotes.star-lovenotes.confirm']()}
      external
    />
  );
};
