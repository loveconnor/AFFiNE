import { Button } from '@lovenotes/component';
import { useNavigateHelper } from '@lovenotes/core/components/hooks/use-navigate-helper';
import { useI18n } from '@lovenotes/i18n';

export const ImportTemplateButton = ({
  name,
  snapshotUrl,
}: {
  name: string;
  snapshotUrl: string;
}) => {
  const t = useI18n();
  const { jumpToImportTemplate } = useNavigateHelper();
  return (
    <Button
      variant="primary"
      onClick={() => jumpToImportTemplate(name, snapshotUrl)}
    >
      {t['com.lovenotes.share-page.header.import-template']()}
    </Button>
  );
};
