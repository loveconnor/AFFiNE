import { ModalConfigContext } from '@lovenotes/component';
import { NavigationGestureService } from '@lovenotes/core/mobile/modules/navigation-gesture';
import { globalVars } from '@lovenotes/core/mobile/styles/variables.css';
import { useService } from '@toeverything/infra';
import { type PropsWithChildren, useCallback } from 'react';

export const ModalConfigProvider = ({ children }: PropsWithChildren) => {
  const navigationGesture = useService(NavigationGestureService);

  const onOpen = useCallback(() => {
    const prev = navigationGesture.enabled$.value;
    if (prev) {
      navigationGesture.setEnabled(false);
      return () => {
        navigationGesture.setEnabled(prev);
      };
    }
    return;
  }, [navigationGesture]);

  return (
    <ModalConfigContext.Provider
      value={{ onOpen, dynamicKeyboardHeight: globalVars.appKeyboardHeight }}
    >
      {children}
    </ModalConfigContext.Provider>
  );
};
