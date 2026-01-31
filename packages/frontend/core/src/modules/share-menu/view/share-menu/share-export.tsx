import { useExportPage } from '@lovenotes/core/components/hooks/lovenotes/use-export-page';
import {
  ExportMenuItems,
  PrintMenuItems,
} from '@lovenotes/core/components/page-list';
import { EditorService } from '@lovenotes/core/modules/editor';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@lovenotes/infra';

import * as styles from './index.css';

export const ShareExport = () => {
  const t = useI18n();
  const editor = useService(EditorService).editor;
  const exportHandler = useExportPage();
  const currentMode = useLiveData(editor.mode$);

  return (
    <div className={styles.exportContainerStyle}>
      <div className={styles.descriptionStyle}>
        {t['com.lovenotes.share-menu.ShareViaExportDescription']()}
      </div>
      <div className={styles.exportContainerStyle}>
        <ExportMenuItems
          exportHandler={exportHandler}
          className={styles.exportItemStyle}
          pageMode={currentMode}
        />
      </div>
      {currentMode === 'page' && (
        <>
          <div className={styles.descriptionStyle}>
            {t['com.lovenotes.share-menu.ShareViaPrintDescription']()}
          </div>
          <div>
            <PrintMenuItems
              exportHandler={exportHandler}
              className={styles.exportItemStyle}
            />
          </div>
        </>
      )}
    </div>
  );
};
