import type { MenuItemProps } from '@lovenotes/component';
import { MenuItem } from '@lovenotes/component';
import { useI18n } from '@lovenotes/i18n';
import { ShareIcon } from '@blocksuite/icons/rc';

export const DisablePublicSharing = (props: MenuItemProps) => {
  const t = useI18n();
  return (
    <MenuItem type="danger" prefixIcon={<ShareIcon />} {...props}>
      {t['Disable Public Sharing']()}
    </MenuItem>
  );
};
