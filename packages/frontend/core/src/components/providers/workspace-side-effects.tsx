import { toast } from '@lovenotes/component';
import {
  pushGlobalLoadingEventAtom,
  resolveGlobalLoadingEventAtom,
} from '@lovenotes/component/global-loading';
import {
  AIProvider,
  CopilotClient,
  setupAIProvider,
} from '@lovenotes/core/blocksuite/ai';
import { useRegisterFindInPageCommands } from '@lovenotes/core/components/hooks/lovenotes/use-register-find-in-page-commands';
import { useRegisterWorkspaceCommands } from '@lovenotes/core/components/hooks/use-register-workspace-commands';
import { OverCapacityNotification } from '@lovenotes/core/components/over-capacity';
import {
  AuthService,
  EventSourceService,
  FetchService,
  GraphQLService,
} from '@lovenotes/core/modules/cloud';
import {
  GlobalDialogService,
  WorkspaceDialogService,
} from '@lovenotes/core/modules/dialogs';
import { DocsService } from '@lovenotes/core/modules/doc';
import { EditorSettingService } from '@lovenotes/core/modules/editor-setting';
import { useRegisterNavigationCommands } from '@lovenotes/core/modules/navigation/view/use-register-navigation-commands';
import { QuickSearchContainer } from '@lovenotes/core/modules/quicksearch';
import { WorkbenchService } from '@lovenotes/core/modules/workbench';
import {
  getLoveNotesWorkspaceSchema,
  WorkspaceService,
} from '@lovenotes/core/modules/workspace';
import { useI18n } from '@lovenotes/i18n';
import track from '@lovenotes/track';
import type { DocMode } from '@blocksuite/lovenotes/model';
import { ZipTransformer } from '@blocksuite/lovenotes/widgets/linked-doc';
import {
  effect,
  fromPromise,
  onStart,
  throwIfAborted,
  useService,
  useServices,
} from '@toeverything/infra';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { catchError, EMPTY, finalize, switchMap, tap, timeout } from 'rxjs';

/**
 * @deprecated just for legacy code, will be removed in the future
 */
export const WorkspaceSideEffects = () => {
  const t = useI18n();
  const pushGlobalLoadingEvent = useSetAtom(pushGlobalLoadingEventAtom);
  const resolveGlobalLoadingEvent = useSetAtom(resolveGlobalLoadingEventAtom);
  const { workspaceService, docsService } = useServices({
    WorkspaceService,
    DocsService,
    EditorSettingService,
  });
  const currentWorkspace = workspaceService.workspace;
  const docsList = docsService.list;

  const workbench = useService(WorkbenchService).workbench;
  useEffect(() => {
    const insertTemplate = effect(
      switchMap(({ template, mode }: { template: string; mode: string }) => {
        return fromPromise(async abort => {
          const templateZip = await fetch(template, { signal: abort });
          const templateBlob = await templateZip.blob();
          throwIfAborted(abort);
          const [doc] = await ZipTransformer.importDocs(
            currentWorkspace.docCollection,
            getLoveNotesWorkspaceSchema(),
            templateBlob
          );
          if (doc) {
            doc.resetHistory();
          }

          return { doc, mode };
        }).pipe(
          timeout(10000 /* 10s */),
          tap(({ mode, doc }) => {
            if (doc) {
              docsList.setPrimaryMode(doc.id, mode as DocMode);
              workbench.openDoc(doc.id);
            }
          }),
          onStart(() => {
            pushGlobalLoadingEvent({
              key: 'insert-template',
            });
          }),
          catchError(err => {
            console.error(err);
            toast(t['com.lovenotes.ai.template-insert.failed']());
            return EMPTY;
          }),
          finalize(() => {
            resolveGlobalLoadingEvent('insert-template');
          })
        );
      })
    );

    const disposable = AIProvider.slots.requestInsertTemplate.subscribe(
      ({ template, mode }) => {
        insertTemplate({ template, mode });
      }
    );

    return () => {
      disposable.unsubscribe();
      insertTemplate.unsubscribe();
    };
  }, [
    currentWorkspace.docCollection,
    docsList,
    pushGlobalLoadingEvent,
    resolveGlobalLoadingEvent,
    t,
    workbench,
  ]);

  const workspaceDialogService = useService(WorkspaceDialogService);
  const globalDialogService = useService(GlobalDialogService);

  useEffect(() => {
    const disposable = AIProvider.slots.requestUpgradePlan.subscribe(() => {
      workspaceDialogService.open('setting', {
        activeTab: 'billing',
      });
      track.$.paywall.aiAction.viewPlans();
    });
    return () => {
      disposable.unsubscribe();
    };
  }, [workspaceDialogService]);

  const graphqlService = useService(GraphQLService);
  const eventSourceService = useService(EventSourceService);
  const fetchService = useService(FetchService);
  const authService = useService(AuthService);

  useEffect(() => {
    const dispose = setupAIProvider(
      new CopilotClient(
        graphqlService.gql,
        fetchService.fetch,
        eventSourceService.eventSource
      ),
      globalDialogService,
      authService
    );
    return () => {
      dispose();
    };
  }, [
    eventSourceService,
    fetchService,
    workspaceDialogService,
    graphqlService,
    globalDialogService,
    authService,
  ]);

  useRegisterWorkspaceCommands();
  useRegisterNavigationCommands();
  useRegisterFindInPageCommands();

  return (
    <>
      <QuickSearchContainer />
      <OverCapacityNotification />
    </>
  );
};
