import type { DocMode } from '@blocksuite/lovenotes/model';
import {
  RadioGroup,
  type RadioItem,
  useMobileMenuController,
} from '@lovenotes/component';
import { EditorService } from '@lovenotes/core/modules/editor';
import { useLiveData, useService } from '@lovenotes/infra';
import track from '@lovenotes/track';
import { useCallback } from 'react';

import * as styles from './mode-switch.css';

const EdgelessRadioItem: RadioItem = {
  value: 'edgeless',
  label: 'Edgeless',
  testId: 'switch-edgeless-mode-button',
};
const PageRadioItem: RadioItem = {
  value: 'page',
  label: 'Page',
  testId: 'switch-page-mode-button',
};
const items = [PageRadioItem, EdgelessRadioItem];

export const EditorModeSwitch = () => {
  const { close } = useMobileMenuController();
  const editor = useService(EditorService).editor;
  const trash = useLiveData(editor.doc.trash$);
  const isSharedMode = editor.isSharedMode;
  const currentMode = useLiveData(editor.mode$);

  const onToggle = useCallback(
    (mode: DocMode) => {
      editor.setMode(mode);
      editor.setSelector(undefined);
      track.$.header.actions.switchPageMode({ mode });
      close();
    },
    [close, editor]
  );

  if (trash || isSharedMode) {
    return null;
  }

  return (
    <div className={styles.radioWrapper}>
      <RadioGroup
        itemHeight={28}
        width="100%"
        borderRadius={8}
        padding={2}
        gap={4}
        value={currentMode}
        items={items}
        onChange={onToggle}
      />
    </div>
  );
};
