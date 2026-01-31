import { NotificationCenter } from '@lovenotes/component';
import {
  AuthService,
  DefaultServerService,
} from '@lovenotes/core/modules/cloud';
import { FrameworkScope, useLiveData, useService } from '@lovenotes/infra';
import { useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { GlobalDialogs } from '../../dialogs';
import { CustomThemeModifier } from './custom-theme';
import { FindInPagePopup } from './find-in-page/find-in-page-popup';

export const RootWrapper = () => {
  const defaultServerService = useService(DefaultServerService);
  const [isServerReady, setIsServerReady] = useState(false);

  useEffect(() => {
    if (isServerReady) {
      return;
    }
    const abortController = new AbortController();
    defaultServerService.server
      .waitForConfigRevalidation(abortController.signal)
      .then(() => setIsServerReady(true))
      .catch(console.error);
    return () => abortController.abort();
  }, [defaultServerService, isServerReady]);

  return (
    <FrameworkScope scope={defaultServerService.server.scope}>
      <GlobalDialogs />
      <NotificationCenter />
      <RootContent isServerReady={isServerReady} />
      <CustomThemeModifier />
      {BUILD_CONFIG.isElectron && <FindInPagePopup />}
    </FrameworkScope>
  );
};

const RootContent = ({ isServerReady }: { isServerReady: boolean }) => {
  const authService = useService(AuthService);
  const sessionStatus = useLiveData(authService.session.status$);
  const isRevalidating = useLiveData(authService.session.isRevalidating$);
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthRoute = useMemo(() => {
    const path = location.pathname.toLowerCase();
    return (
      path === '/sign-in' ||
      path.startsWith('/sign-in/') ||
      path === '/signin' ||
      path.startsWith('/signin/') ||
      path.startsWith('/auth/') ||
      path.startsWith('/oauth') ||
      path.startsWith('/magic-link')
    );
  }, [location.pathname]);

  useEffect(() => {
    if (!isServerReady || isRevalidating) {
      return;
    }
    if (sessionStatus === 'unauthenticated' && !isAuthRoute) {
      const redirect = location.pathname + location.search + location.hash;
      const search = new URLSearchParams({
        redirect_uri: redirect || '/',
      });
      navigate(`/sign-in?${search.toString()}`, { replace: true });
    }
  }, [
    isAuthRoute,
    isRevalidating,
    isServerReady,
    location.hash,
    location.pathname,
    location.search,
    navigate,
    sessionStatus,
  ]);

  return (sessionStatus === 'authenticated' || isAuthRoute) && <Outlet />;
};
