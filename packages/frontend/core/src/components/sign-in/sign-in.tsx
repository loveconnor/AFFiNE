import { ArrowRightBigIcon } from '@blocksuite/icons/rc';
import { Button, notify } from '@lovenotes/component';
import {
  AuthContainer,
  AuthContent,
  AuthFooter,
  AuthHeader,
  AuthInput,
} from '@lovenotes/component/auth-components';
import { useAsyncCallback } from '@lovenotes/core/components/hooks/lovenotes-async-hooks';
import { OAuth } from '@lovenotes/core/components/lovenotes/auth/oauth';
import { AuthService, ServerService } from '@lovenotes/core/modules/cloud';
import type { AuthSessionStatus } from '@lovenotes/core/modules/cloud/entities/session';
import { ServerDeploymentType } from '@lovenotes/graphql';
import { Trans, useI18n } from '@lovenotes/i18n';
import { useLiveData, useService } from '@lovenotes/infra';
import { cssVar } from '@toeverything/theme';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

import { useSelfhostLoginVersionGuard } from '../hooks/lovenotes/use-selfhost-login-version-guard';
import type { SignInState } from '.';
import { Back } from './back';
import * as style from './style.css';

const emailRegex =
  /^(?:(?:[^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(?:(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|((?:[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(email: string) {
  return emailRegex.test(email);
}

export const SignInStep = ({
  state,
  changeState,
  onSkip,
  onAuthenticated,
}: {
  state: SignInState;
  changeState: Dispatch<SetStateAction<SignInState>>;
  onSkip: () => void;
  onAuthenticated?: (status: AuthSessionStatus) => void;
}) => {
  const t = useI18n();
  const serverService = useService(ServerService);
  const serverName = useLiveData(
    serverService.server.config$.selector(c => c.serverName)
  );
  const versionError = useSelfhostLoginVersionGuard(serverService.server);
  const isSelfhosted = useLiveData(
    serverService.server.config$.selector(
      c => c.type === ServerDeploymentType.Selfhosted
    )
  );
  const authService = useService(AuthService);
  const [isMutating, setIsMutating] = useState(false);

  const [email, setEmail] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(true);

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

  const onContinue = useAsyncCallback(async () => {
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }

    setIsValidEmail(true);
    setIsMutating(true);

    try {
      const { hasPassword } = await authService.checkUserByEmail(email);

      if (hasPassword) {
        changeState(prev => ({
          ...prev,
          email,
          step: 'signInWithPassword',
          hasPassword: true,
        }));
      } else {
        changeState(prev => ({
          ...prev,
          email,
          step: 'signInWithEmail',
          hasPassword: false,
        }));
      }
    } catch (err: any) {
      console.error(err);

      // TODO(@eyhn): better error handling
      notify.error({
        title: 'Failed to sign in',
        message: err.message,
      });
    }

    setIsMutating(false);
  }, [authService, changeState, email]);

  if (versionError && isSelfhosted) {
    return (
      <AuthContainer>
        <AuthHeader
          title={t['com.lovenotes.auth.sign.in']()}
          subTitle={serverName}
        />
        <AuthContent>
          <div>{versionError}</div>
        </AuthContent>
      </AuthContainer>
    );
  }

  return (
    <AuthContainer>
      <AuthHeader
        title={t['com.lovenotes.auth.sign.in']()}
        subTitle={serverName}
      />

      <AuthContent>
        <OAuth redirectUrl={state.redirectUrl} />

        <AuthInput
          className={style.authInput}
          label={t['com.lovenotes.settings.email']()}
          placeholder={t['com.lovenotes.auth.sign.email.placeholder']()}
          onChange={setEmail}
          error={!isValidEmail}
          errorHint={
            isValidEmail ? '' : t['com.lovenotes.auth.sign.email.error']()
          }
          onEnter={onContinue}
        />

        <Button
          className={style.signInButton}
          style={{ width: '100%' }}
          size="extraLarge"
          data-testid="continue-login-button"
          block
          loading={isMutating}
          suffix={<ArrowRightBigIcon />}
          suffixStyle={{ width: 20, height: 20, color: cssVar('blue') }}
          onClick={onContinue}
        >
          {t['com.lovenotes.auth.sign.email.continue']()}
        </Button>

        {!isSelfhosted && (
          <div className={style.authMessage}>
            {/*prettier-ignore*/}
            <Trans i18nKey="com.lovenotes.auth.sign.message">
              By clicking &quot;Continue with Google/Email&quot; above, you acknowledge that
              you agree to LoveNotes&apos;s <a href="https://lovenotes.pro/terms" target="_blank" rel="noreferrer">Terms of Conditions</a> and <a href="https://lovenotes.pro/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.
          </Trans>
          </div>
        )}
      </AuthContent>
      {isSelfhosted && (
        <AuthFooter>
          <Back changeState={changeState} />
        </AuthFooter>
      )}
    </AuthContainer>
  );
};
