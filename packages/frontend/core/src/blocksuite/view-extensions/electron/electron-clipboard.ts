import { NativeClipboardExtension } from '@blocksuite/lovenotes/shared/services';
import { DesktopApiService } from '@lovenotes/core/modules/desktop-api';
import type { FrameworkProvider } from '@lovenotes/infra';

export function patchForClipboardInElectron(framework: FrameworkProvider) {
  const desktopApi = framework.get(DesktopApiService);
  return NativeClipboardExtension({
    copyAsPNG: desktopApi.handler.clipboard.copyAsPNG,
  });
}
