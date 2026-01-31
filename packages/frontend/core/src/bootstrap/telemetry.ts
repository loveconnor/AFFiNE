import { APP_SETTINGS_STORAGE_KEY } from '@lovenotes/infra/atom';
import { sentry, tracker } from '@lovenotes/track';

tracker.init();
sentry.init();

if (typeof localStorage !== 'undefined') {
  let enabled = true;
  const settingsStr = localStorage.getItem(APP_SETTINGS_STORAGE_KEY);

  if (settingsStr) {
    const parsed = JSON.parse(settingsStr);
    enabled = parsed.enableTelemetry;
  }

  if (!enabled) {
    // NOTE: telemetry setting is respected by tracker and sentry.
    sentry.disable();
    tracker.opt_out_tracking();
  }
}
