import { uniReactRoot } from '@lovenotes/component';
import { useResponsiveSidebar } from '@lovenotes/core/components/hooks/use-responsive-siedebar';
import { AiLoginRequiredModal } from '@lovenotes/core/components/lovenotes/auth/ai-login-required';
import { SWRConfigProvider } from '@lovenotes/core/components/providers/swr-config-provider';
import { WorkspaceSideEffects } from '@lovenotes/core/components/providers/workspace-side-effects';
import { AIIsland } from '@lovenotes/core/desktop/components/ai-island';
import { AppContainer } from '@lovenotes/core/desktop/components/app-container';
import { DocumentTitle } from '@lovenotes/core/desktop/components/document-title';
import { WorkspaceDialogs } from '@lovenotes/core/desktop/dialogs';
import { PeekViewManagerModal } from '@lovenotes/core/modules/peek-view';
import { QuotaCheck } from '@lovenotes/core/modules/quota';
import { WorkbenchService } from '@lovenotes/core/modules/workbench';
import { WorkspaceService } from '@lovenotes/core/modules/workspace';
import { LiveData, useLiveData, useService } from '@lovenotes/infra';
import type { PropsWithChildren } from 'react';

export const WorkspaceLayout = function WorkspaceLayout({
  children,
}: PropsWithChildren) {
  const currentWorkspace = useService(WorkspaceService).workspace;
  return (
    <SWRConfigProvider>
      <WorkspaceDialogs />

      {/* ---- some side-effect components ---- */}
      {currentWorkspace?.flavour !== 'local' ? (
        <QuotaCheck workspaceMeta={currentWorkspace.meta} />
      ) : null}
      <AiLoginRequiredModal />
      <WorkspaceSideEffects />
      <PeekViewManagerModal />
      <DocumentTitle />

      <WorkspaceLayoutInner>{children}</WorkspaceLayoutInner>
      {/* should show after workspace loaded */}
      {/* FIXME: wait for better ai, <WorkspaceAIOnboarding /> */}
      <AIIsland />
      <uniReactRoot.Root />
    </SWRConfigProvider>
  );
};

/**
 * Wraps the workspace layout main router view
 */
const WorkspaceLayoutUIContainer = ({ children }: PropsWithChildren) => {
  const workbench = useService(WorkbenchService).workbench;
  const currentPath = useLiveData(
    LiveData.computed(get => {
      return get(workbench.basename$) + get(workbench.location$).pathname;
    })
  );
  useResponsiveSidebar();

  return (
    <AppContainer data-current-path={currentPath}>{children}</AppContainer>
  );
};
const WorkspaceLayoutInner = ({ children }: PropsWithChildren) => {
  return <WorkspaceLayoutUIContainer>{children}</WorkspaceLayoutUIContainer>;
};
