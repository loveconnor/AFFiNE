# iOS

LoveNotes iOS app.

## Build

- `yarn install`
- `BUILD_TYPE=canary PUBLIC_PATH="/" yarn lovenotes @lovenotes/ios build`
- `yarn lovenotes @lovenotes/ios cap sync`
- `yarn lovenotes @lovenotes/ios cap open ios`

## Live Reload

> Capacitor doc: https://capacitorjs.com/docs/guides/live-reload#using-with-framework-clis

- `yarn install`
- `yarn dev`
  - select `ios` for the "Distribution" option
- `yarn lovenotes @lovenotes/ios sync:dev`
- `yarn lovenotes @lovenotes/ios cap open ios`
