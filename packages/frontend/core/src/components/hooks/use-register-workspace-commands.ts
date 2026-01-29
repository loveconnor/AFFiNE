import { AppSidebarService } from '@lovenotes/core/modules/app-sidebar';
import { DesktopApiService } from '@lovenotes/core/modules/desktop-api';
import {
  GlobalDialogService,
  WorkspaceDialogService,
} from '@lovenotes/core/modules/dialogs';
import { I18nService } from '@lovenotes/core/modules/i18n';
import { UrlService } from '@lovenotes/core/modules/url';
import { WorkbenchService } from '@lovenotes/core/modules/workbench';
import { WorkspaceService } from '@lovenotes/core/modules/workspace';
import { useI18n } from '@lovenotes/i18n';
import {
  useService,
  useServiceOptional,
  useServices,
} from '@toeverything/infra';
import { useStore } from 'jotai';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

import { usePageHelper } from '../../blocksuite/block-suite-page-list/utils';
import {
  PreconditionStrategy,
  registerLoveNotesCommand,
  registerLoveNotesCreationCommands,
  registerLoveNotesHelpCommands,
  registerLoveNotesLanguageCommands,
  registerLoveNotesLayoutCommands,
  registerLoveNotesNavigationCommands,
  registerLoveNotesSettingsCommands,
  registerLoveNotesUpdatesCommands,
} from '../../commands';
import { EditorSettingService } from '../../modules/editor-setting';
import { CMDKQuickSearchService } from '../../modules/quicksearch/services/cmdk';
import { useNavigateHelper } from './use-navigate-helper';

function registerCMDKCommand(service: CMDKQuickSearchService) {
  return registerLoveNotesCommand({
    id: 'lovenotes:show-quick-search',
    preconditionStrategy: PreconditionStrategy.Never,
    category: 'lovenotes:general',
    keyBinding: {
      binding: '$mod+K',
    },
    label: '',
    icon: '',
    run() {
      service.toggle();
    },
  });
}

export function useRegisterWorkspaceCommands() {
  const store = useStore();
  const t = useI18n();
  const theme = useTheme();
  const currentWorkspace = useService(WorkspaceService).workspace;
  const urlService = useService(UrlService);
  const pageHelper = usePageHelper(currentWorkspace.docCollection);
  const navigationHelper = useNavigateHelper();
  const {
    cMDKQuickSearchService,
    editorSettingService,
    workspaceDialogService,
    globalDialogService,
    appSidebarService,
    i18nService,
  } = useServices({
    CMDKQuickSearchService,
    EditorSettingService,
    WorkspaceDialogService,
    GlobalDialogService,
    AppSidebarService,
    I18nService,
  });

  const i18n = i18nService.i18n;

  const desktopApiService = useServiceOptional(DesktopApiService);
  const workbenchService = useServiceOptional(WorkbenchService);

  const quitAndInstall = desktopApiService?.handler.updater.quitAndInstall;

  useEffect(() => {
    const unsub = registerCMDKCommand(cMDKQuickSearchService);

    return () => {
      unsub();
    };
  }, [cMDKQuickSearchService]);

  // register LoveNotesUpdatesCommands
  useEffect(() => {
    if (!quitAndInstall) {
      return;
    }

    const unsub = registerLoveNotesUpdatesCommands({
      store,
      t,
      quitAndInstall,
    });

    return () => {
      unsub();
    };
  }, [quitAndInstall, store, t]);

  // register LoveNotesNavigationCommands
  useEffect(() => {
    const unsub = registerLoveNotesNavigationCommands({
      t,
      docCollection: currentWorkspace.docCollection,
      navigationHelper,
      workspaceDialogService,
      workbenchService,
    });

    return () => {
      unsub();
    };
  }, [
    store,
    t,
    currentWorkspace.docCollection,
    navigationHelper,
    globalDialogService,
    workspaceDialogService,
    workbenchService,
  ]);

  // register LoveNotesSettingsCommands
  useEffect(() => {
    const unsub = registerLoveNotesSettingsCommands({
      store,
      t,
      theme,
      editorSettingService,
    });

    return () => {
      unsub();
    };
  }, [editorSettingService, store, t, theme]);

  useEffect(() => {
    const unsub = registerLoveNotesLanguageCommands({
      i18n,
      t,
    });

    return () => {
      unsub();
    };
  }, [i18n, t]);

  // register LoveNotesLayoutCommands
  useEffect(() => {
    const unsub = registerLoveNotesLayoutCommands({ t, appSidebarService });

    return () => {
      unsub();
    };
  }, [appSidebarService, store, t]);

  // register LoveNotesCreationCommands
  useEffect(() => {
    const unsub = registerLoveNotesCreationCommands({
      globalDialogService,
      pageHelper: pageHelper,
      t,
    });

    return () => {
      unsub();
    };
  }, [store, pageHelper, t, globalDialogService]);

  // register LoveNotesHelpCommands
  useEffect(() => {
    const unsub = registerLoveNotesHelpCommands({
      t,
      urlService,
      workspaceDialogService,
    });

    return () => {
      unsub();
    };
  }, [t, globalDialogService, urlService, workspaceDialogService]);
}
