import { useI18n } from '@lovenotes/i18n';
import { useMemo } from 'react';

export const useNavConfig = () => {
  const t = useI18n();
  return useMemo(
    () => [
      {
        title: t['com.lovenotes.other-page.nav.official-website'](),
        path: 'https://lovenotes.pro',
      },
      {
        title: t['com.lovenotes.other-page.nav.blog'](),
        path: 'https://lovenotes.pro/blog',
      },
      {
        title: t['com.lovenotes.other-page.nav.contact-us'](),
        path: 'https://lovenotes.pro/about-us',
      },
    ],
    [t]
  );
};
