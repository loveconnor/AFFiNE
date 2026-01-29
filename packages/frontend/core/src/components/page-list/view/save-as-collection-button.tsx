import { Button, usePromptModal } from '@lovenotes/component';
import { useI18n } from '@lovenotes/i18n';
import { SaveIcon } from '@blocksuite/icons/rc';
import { useCallback } from 'react';

import * as styles from './save-as-collection-button.css';

interface SaveAsCollectionButtonProps {
  onConfirm: (collectionName: string) => void;
}

export const SaveAsCollectionButton = ({
  onConfirm,
}: SaveAsCollectionButtonProps) => {
  const t = useI18n();
  const { openPromptModal } = usePromptModal();
  const handleClick = useCallback(() => {
    openPromptModal({
      title: t['com.lovenotes.editCollection.saveCollection'](),
      label: t['com.lovenotes.editCollectionName.name'](),
      inputOptions: {
        placeholder: t['com.lovenotes.editCollectionName.name.placeholder'](),
      },
      children: (
        <div className={styles.createTips}>
          {t['com.lovenotes.editCollectionName.createTips']()}
        </div>
      ),
      confirmText: t['com.lovenotes.editCollection.save'](),
      cancelText: t['com.lovenotes.editCollection.button.cancel'](),
      confirmButtonOptions: {
        variant: 'primary',
      },
      onConfirm(name) {
        onConfirm(name);
      },
    });
  }, [openPromptModal, t, onConfirm]);
  return (
    <Button
      onClick={handleClick}
      data-testid="save-as-collection"
      prefix={<SaveIcon />}
      className={styles.button}
    >
      {t['com.lovenotes.editCollection.saveCollection']()}
    </Button>
  );
};
