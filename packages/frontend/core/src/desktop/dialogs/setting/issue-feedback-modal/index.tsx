import { OverlayModal } from '@lovenotes/component';
import { useI18n } from '@lovenotes/i18n';

export const IssueFeedbackModal = ({
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
          src={'/static/newIssue.mp4'}
          autoPlay
          loop
        />
      }
      title={t['com.lovenotes.issue-feedback.title']()}
      onOpenChange={setOpen}
      description={t['com.lovenotes.issue-feedback.description']()}
      cancelText={t['com.lovenotes.issue-feedback.cancel']()}
      to={`${BUILD_CONFIG.githubUrl}/issues/new/choose`}
      confirmText={t['com.lovenotes.issue-feedback.confirm']()}
      confirmButtonOptions={{
        variant: 'primary',
      }}
      external
    />
  );
};
