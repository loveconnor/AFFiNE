import { PresentationIcon } from '@blocksuite/icons/rc';
import { Button } from '@lovenotes/component/ui/button';
import { EditorService } from '@lovenotes/core/modules/editor';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@lovenotes/infra';

import * as styles from './styles.css';

export const PresentButton = () => {
  const t = useI18n();
  const editorService = useService(EditorService);
  const isPresent = useLiveData(editorService.editor.isPresenting$);

  return (
    <Button
      prefix={<PresentationIcon />}
      className={styles.presentButton}
      onClick={() => editorService.editor.togglePresentation()}
      disabled={isPresent}
    >
      {t['com.lovenotes.share-page.header.present']()}
    </Button>
  );
};
