import type { ToastOptions } from '@lovenotes/component';
import { toast as basicToast } from '@lovenotes/component';

export const toast = (message: string, options?: ToastOptions) => {
  const modal = document.querySelector<HTMLDivElement>('[role=presentation]');
  if (modal && !(modal instanceof HTMLDivElement)) {
    throw new Error('modal should be div');
  }
  return basicToast(message, {
    portal: modal || document.body,
    ...options,
  });
};

declare global {
  // global Events
  interface WindowEventMap {
    'lovenotes-toast:emit': CustomEvent<{
      message: string;
    }>;
  }
}
