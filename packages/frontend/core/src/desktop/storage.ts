import { DesktopApiService } from '@lovenotes/core/modules/desktop-api';
import {
  CacheStorage,
  GlobalCache,
  GlobalState,
} from '@lovenotes/core/modules/storage';
import {
  ElectronGlobalCache,
  ElectronGlobalState,
} from '@lovenotes/core/modules/storage/impls/electron';
import { IDBGlobalState } from '@lovenotes/core/modules/storage/impls/storage';
import type { Framework } from '@lovenotes/infra';

export function configureElectronStateStorageImpls(framework: Framework) {
  framework.impl(GlobalCache, ElectronGlobalCache, [DesktopApiService]);
  framework.impl(GlobalState, ElectronGlobalState, [DesktopApiService]);
  framework.impl(CacheStorage, IDBGlobalState);
}
