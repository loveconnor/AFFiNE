import {
  AnimatedDeleteIcon,
  toast,
  useConfirmModal,
  useDropTarget,
} from '@lovenotes/component';
import { MenuLinkItem } from '@lovenotes/core/modules/app-sidebar/views';
import { DocsService } from '@lovenotes/core/modules/doc';
import { GlobalContextService } from '@lovenotes/core/modules/global-context';
import { GuardService } from '@lovenotes/core/modules/permissions';
import type { LoveNotesDNDData } from '@lovenotes/core/types/dnd';
import { UserFriendlyError } from '@lovenotes/error';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@lovenotes/infra';

export const TrashButton = () => {
  const t = useI18n();
  const docsService = useService(DocsService);
  const { openConfirmModal } = useConfirmModal();
  const globalContextService = useService(GlobalContextService);
  const trashActive = useLiveData(globalContextService.globalContext.isTrash.$);
  const guardService = useService(GuardService);

  const { dropTargetRef, draggedOver } = useDropTarget<LoveNotesDNDData>(
    () => ({
      data: {
        at: 'app-sidebar:trash',
      },
      canDrop(data) {
        return data.source.data.entity?.type === 'doc';
      },
      onDrop(data) {
        if (data.source.data.entity?.type === 'doc') {
          const docId = data.source.data.entity.id;
          const docRecord = docsService.list.doc$(docId).value;
          if (docRecord) {
            openConfirmModal({
              title: t['com.lovenotes.moveToTrash.confirmModal.title'](),
              description: t[
                'com.lovenotes.moveToTrash.confirmModal.description'
              ]({
                title: docRecord.title$.value || t['Untitled'](),
              }),
              confirmText: t.Delete(),
              confirmButtonOptions: {
                variant: 'error',
              },
              async onConfirm() {
                try {
                  const canTrash = await guardService.can(
                    'Doc_Trash',
                    docRecord.id
                  );
                  if (!canTrash) {
                    toast(t['com.lovenotes.no-permission']());
                    return;
                  }
                  docRecord.moveToTrash();
                } catch (error) {
                  console.error(error);
                  const userFriendlyError = UserFriendlyError.fromAny(error);
                  toast(
                    t[`error.${userFriendlyError.name}`](userFriendlyError.data)
                  );
                }
              },
            });
          }
        }
      },
      allowExternal: true,
    }),
    [docsService.list, guardService, openConfirmModal, t]
  );

  return (
    <MenuLinkItem
      ref={dropTargetRef}
      icon={<AnimatedDeleteIcon closed={draggedOver} />}
      active={trashActive || draggedOver}
      to={'/trash'}
    >
      <span data-testid="trash-page">
        {t['com.lovenotes.workspaceSubPath.trash']()}
      </span>
    </MenuLinkItem>
  );
};
