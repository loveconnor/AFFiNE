import { Button, Modal } from '@lovenotes/component';
import { useAsyncCallback } from '@lovenotes/core/components/hooks/lovenotes-async-hooks';
import { IntegrationService } from '@lovenotes/core/modules/integration';
import { useI18n } from '@lovenotes/i18n';
import { useService } from '@lovenotes/infra';
import { useCallback, useState } from 'react';

import * as styles from './connected.css';
import { actionButton } from './index.css';
import { readwiseTrack } from './track';

export const ReadwiseDisconnectDialog = ({
  onClose,
}: {
  onClose: () => void;
}) => {
  const t = useI18n();
  const readwise = useService(IntegrationService).readwise;

  const onOpenChange = useCallback(
    (open: boolean) => {
      if (!open) onClose();
    },
    [onClose]
  );
  const handleCancel = useCallback(() => onClose(), [onClose]);
  const handleKeep = useCallback(() => {
    readwise.disconnect();
    readwiseTrack.disconnectIntegration({ method: 'keep' });
    onClose();
  }, [onClose, readwise]);
  const handleDelete = useAsyncCallback(async () => {
    await readwise.deleteAll();
    readwise.disconnect();
    readwiseTrack.disconnectIntegration({ method: 'delete' });
    onClose();
  }, [onClose, readwise]);

  return (
    <Modal
      open={true}
      onOpenChange={onOpenChange}
      contentOptions={{ className: styles.connectDialog }}
    >
      <div className={styles.connectDialogTitle}>
        {t['com.lovenotes.integration.readwise.disconnect.title']()}
      </div>
      <div className={styles.connectDialogDesc}>
        {t['com.lovenotes.integration.readwise.disconnect.desc']()}
      </div>
      <footer className={styles.footer}>
        <Button onClick={handleCancel}>{t['Cancel']()}</Button>
        <div className={styles.actions}>
          <Button variant="error" onClick={handleDelete}>
            {t['com.lovenotes.integration.readwise.disconnect.delete']()}
          </Button>
          <Button variant="primary" onClick={handleKeep}>
            {t['com.lovenotes.integration.readwise.disconnect.keep']()}
          </Button>
        </div>
      </footer>
    </Modal>
  );
};

export const ReadwiseDisconnectButton = () => {
  const t = useI18n();
  const [showDisconnectDialog, setShowDisconnectDialog] = useState(false);
  return (
    <>
      {showDisconnectDialog && (
        <ReadwiseDisconnectDialog
          onClose={() => setShowDisconnectDialog(false)}
        />
      )}
      <Button
        variant="error"
        className={actionButton}
        onClick={() => setShowDisconnectDialog(true)}
      >
        {t['com.lovenotes.integration.readwise.disconnect']()}
      </Button>
    </>
  );
};
