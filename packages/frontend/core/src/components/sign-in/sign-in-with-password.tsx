import { notify } from '@lovenotes/component';
import {
  AuthContainer,
  AuthContent,
  AuthFooter,
  AuthHeader,
  AuthInput,
} from '@lovenotes/component/auth-components';
import { Button } from '@lovenotes/component/ui/button';
import { useAsyncCallback } from '@lovenotes/core/components/hooks/lovenotes-async-hooks';
import {
  AuthService,
  CaptchaService,
  ServerService,
} from '@lovenotes/core/modules/cloud';
import type { AuthSessionStatus } from '@lovenotes/core/modules/cloud/entities/session';
import { Unreachable } from '@lovenotes/env/constant';
import { ServerDeploymentType } from '@lovenotes/graphql';
import { useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@toeverything/infra';
import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useEffect, useState } from 'react';

import type { SignInState } from '.';
import { Back } from './back';
import { Captcha } from './captcha';
import * as styles from './style.css';

export const SignInWithPasswordStep = ({
  state,
  changeState,
  onAuthenticated,
}: {
  state: SignInState;
  changeState: Dispatch<SetStateAction<SignInState>>;
  onAuthenticated?: (status: AuthSessionStatus) => void;
}) => {
  const t = useI18n();
  const authService = useService(AuthService);

  const email = state.email;

  if (!email) {
    throw new Unreachable();
  }

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const captchaService = useService(CaptchaService);
  const serverService = useService(ServerService);
  const isSelfhosted = useLiveData(
    serverService.server.config$.selector(
      c => c.type === ServerDeploymentType.Selfhosted
    )
  );
  const serverName = useLiveData(
    serverService.server.config$.selector(c => c.serverName)
  );

  const verifyToken = useLiveData(captchaService.verifyToken$);
  const needCaptcha = useLiveData(captchaService.needCaptcha$);
  const challenge = useLiveData(captchaService.challenge$);
  const [isLoading, setIsLoading] = useState(false);

  const loginStatus = useLiveData(authService.session.status$);

  useEffect(() => {
    if (loginStatus === 'authenticated') {
      notify.success({
        title: t['com.lovenotes.auth.toast.title.signed-in'](),
        message: t['com.lovenotes.auth.toast.message.signed-in'](),
      });
    }
    onAuthenticated?.(loginStatus);
  }, [loginStatus, onAuthenticated, t]);

  const onSignIn = useAsyncCallback(async () => {
    if (isLoading || (!verifyToken && needCaptcha)) return;
    setIsLoading(true);

    try {
      captchaService.revalidate();
      await authService.signInPassword({
        email,
        password,
        verifyToken,
        challenge,
      });
    } catch (err) {
      console.error(err);
      setPasswordError(true);
    } finally {
      setIsLoading(false);
    }
  }, [
    isLoading,
    verifyToken,
    needCaptcha,
    captchaService,
    authService,
    email,
    password,
    challenge,
  ]);

  return (
    <AuthContainer>
      <AuthHeader
        title={t['com.lovenotes.auth.sign.in']()}
        subTitle={serverName}
      />

      <AuthContent>
        <AuthInput
          label={t['com.lovenotes.settings.email']()}
          disabled={true}
          value={email}
        />
        <AuthInput
          autoFocus
          data-testid="password-input"
          label={t['com.lovenotes.auth.password']()}
          value={password}
          type="password"
          onChange={useCallback((value: string) => {
            setPassword(value);
          }, [])}
          error={passwordError}
          errorHint={t['com.lovenotes.auth.password.error']()}
          onEnter={onSignIn}
        />
        {!verifyToken && needCaptcha && <Captcha />}
        <Button
          data-testid="sign-in-button"
          variant="primary"
          size="extraLarge"
          style={{ width: '100%' }}
          disabled={isLoading || (!verifyToken && needCaptcha)}
          onClick={onSignIn}
        >
          {t['com.lovenotes.auth.sign.in']()}
        </Button>
      </AuthContent>
      <AuthFooter>
        <Back changeState={changeState} />
      </AuthFooter>
    </AuthContainer>
  );
};
