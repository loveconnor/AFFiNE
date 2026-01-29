import { ExpiredPage } from '@lovenotes/component/member-components';
import { useCallback } from 'react';

import {
  RouteLogic,
  useNavigateHelper,
} from '../../../components/hooks/use-navigate-helper';

/**
 * /expired page
 *
 * only on web
 */
export const Component = () => {
  const { jumpToIndex } = useNavigateHelper();
  const onOpenLoveNotes = useCallback(() => {
    jumpToIndex(RouteLogic.REPLACE);
  }, [jumpToIndex]);

  return <ExpiredPage onOpenLoveNotes={onOpenLoveNotes} />;
};
