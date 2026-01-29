# Android

LoveNotes Android app.

## Setup

- set CARGO_HOME to your system environment
- add

  `rust.cargoCommand={replace_with_your_own_cargo_home_absolute_path}/bin/cargo`

  `rust.rustcCommand={replace_with_your_own_cargo_home_absolute_path}/bin/rustc`

  to App/local.properties

## Build

- yarn install
- BUILD_TYPE=canary PUBLIC_PATH="/" yarn lovenotes @lovenotes/android build
- yarn lovenotes @lovenotes/android cap sync
- yarn lovenotes @lovenotes/android cap open android
