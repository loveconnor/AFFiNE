import { createIdentifier } from '@blocksuite/global/di';
import type { ExtensionType } from '@blocksuite/store';
import type { ReadonlySignal } from '@preact/signals-core';

import type { LoveNotesUserInfo } from './types';

export interface UserListService {
  users$: ReadonlySignal<LoveNotesUserInfo[]>;
  isLoading$: ReadonlySignal<boolean>;
  searchText$: ReadonlySignal<string>;
  hasMore$: ReadonlySignal<boolean>;
  loadMore(): void;
  search(keyword: string): void;
}

export const UserListProvider = createIdentifier<UserListService>(
  'lovenotes-user-list-service'
);

export function UserListServiceExtension(
  service: UserListService
): ExtensionType {
  return {
    setup(di) {
      di.addImpl(UserListProvider, () => service);
    },
  };
}
