import { DebugLogger } from '@lovenotes/debug';
import { UserFriendlyError } from '@lovenotes/error';
import { fromPromise, Service } from '@lovenotes/infra';

import type { ServerService } from './server';

const logger = new DebugLogger('lovenotes:fetch');

export type FetchInit = RequestInit & { timeout?: number };

export class FetchService extends Service {
  constructor(private readonly serverService: ServerService) {
    super();
  }
  rxFetch = (
    input: string,
    init?: RequestInit & {
      // https://github.com/microsoft/TypeScript/issues/54472
      priority?: 'auto' | 'low' | 'high';
    } & {
      traceEvent?: string;
    }
  ) => {
    return fromPromise(signal => {
      return this.fetch(input, { signal, ...init });
    });
  };

  /**
   * fetch with custom custom timeout and error handling.
   */
  fetch = async (input: string, init?: FetchInit): Promise<Response> => {
    logger.debug('fetch', input);
    const rawBaseUrl = this.serverService.server.serverMetadata.baseUrl;
    // Electron packaged app serves assets:// but backend runs on http(s).
    // Prefer a real backend URL when assets:// is detected.
    const effectiveBaseUrl =
      BUILD_CONFIG.isElectron && rawBaseUrl.startsWith('assets://')
        ? 'http://127.0.0.1:3010'
        : rawBaseUrl;

    if (
      BUILD_CONFIG.isElectron &&
      rawBaseUrl.startsWith('assets://') &&
      // Only stub when we truly have no real backend target
      !effectiveBaseUrl.startsWith('http') &&
      input.includes('/graphql')
    ) {
      const operationName = (() => {
        const headers = init?.headers as
          | Headers
          | Record<string, string>
          | undefined;
        if (headers instanceof Headers) {
          return headers.get('x-operation-name') ?? undefined;
        }
        return headers?.['x-operation-name'] ?? headers?.['X-Operation-Name'];
      })();

      const serverConfig = {
        version: BUILD_CONFIG.appVersion,
        baseUrl,
        name: 'LoveNotes Local',
        features: ['LocalWorkspace'],
        type: 'Selfhosted',
        initialized: true,
        calendarProviders: [],
        credentialsRequirement: {
          password: {
            minLength: 8,
            maxLength: 32,
          },
        },
      };

      const currentUser = {
        id: 'local-user',
        name: 'Connor Love',
        email: 'loveconnor2005@gmail.com',
        avatarUrl: null,
        emailVerified: false,
        features: [],
        settings: {
          receiveInvitationEmail: false,
          receiveMentionEmail: false,
          receiveCommentEmail: false,
        },
        quota: {
          name: 'Local',
          blobLimit: 0,
          storageQuota: 0,
          historyPeriod: 0,
          memberLimit: 1,
          copilotActionLimit: 0,
          usedStorageQuota: 0,
          humanReadable: {
            name: 'Local',
            blobLimit: '0',
            storageQuota: '0',
            historyPeriod: '0',
            memberLimit: '1',
            copilotActionLimit: '0',
            usedStorageQuota: '0',
          },
        },
        quotaUsage: {
          storageQuota: 0,
        },
        copilot: {
          quota: {
            limit: null,
            used: 0,
          },
        },
        token: {
          sessionToken: '',
        },
      };

      const data = (() => {
        switch (operationName) {
          case 'serverConfig':
          case 'adminServerConfig':
            return { serverConfig };
          case 'oauthProviders':
            return { serverConfig: { oauthProviders: [] } };
          case 'getCurrentUserProfile':
          case 'getCurrentUser':
          case 'listUserAccessTokens':
          case 'copilotQuotaQuery':
            return { currentUser };
          case 'createCopilotSession':
            return { createCopilotSession: 'local-session' };
          case 'createCopilotMessage':
            return {
              createCopilotMessage: {
                messageId: 'local-message',
                sessionId: 'local-session',
              },
            };
          case 'getCopilotSession':
          case 'getCopilotSessions':
          case 'getCopilotHistories':
          case 'getCopilotHistoryIds':
          case 'getCopilotRecentSessions':
            return {
              currentUser: {
                copilot: {
                  chats: { edges: [] },
                  contexts: [],
                },
              },
            };
          default:
            return { currentUser };
        }
      })();

      return new Response(JSON.stringify({ data }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    }
    const externalSignal = init?.signal;
    if (externalSignal?.aborted) {
      throw externalSignal.reason;
    }
    const abortController = new AbortController();
    externalSignal?.addEventListener('abort', reason => {
      abortController.abort(reason);
    });

    const timeout = init?.timeout ?? 30000;
    const timeoutId =
      timeout > 0
        ? setTimeout(() => {
            abortController.abort(new Error('timeout after ' + timeout + 'ms'));
          }, timeout)
        : undefined;

    let res: Response;

    try {
      res = await globalThis.fetch(new URL(input, effectiveBaseUrl), {
        ...init,
        signal: abortController.signal,
        headers: {
          ...init?.headers,
          'x-lovenotes-version': BUILD_CONFIG.appVersion,
        },
      });
    } catch (err: any) {
      const isAbort =
        err?.name === 'AbortError' ||
        err?.code === 'ABORT_ERR' ||
        err?.type === 'aborted' ||
        abortController.signal.aborted;

      const message =
        err?.message || (isAbort ? 'Request aborted' : 'Unknown network error');

      throw new UserFriendlyError({
        status: isAbort ? 499 : 504,
        code: isAbort ? 'REQUEST_ABORTED' : 'NETWORK_ERROR',
        type: isAbort ? 'REQUEST_ABORTED' : 'NETWORK_ERROR',
        name: isAbort ? 'REQUEST_ABORTED' : 'NETWORK_ERROR',
        message: `Network error: ${message}`,
        stacktrace: err?.stack,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    if (!res.ok) {
      if (res.status === 504) {
        const error = new Error('Gateway Timeout');
        logger.debug('network error', error);
        throw new UserFriendlyError({
          status: 504,
          code: 'NETWORK_ERROR',
          type: 'NETWORK_ERROR',
          name: 'NETWORK_ERROR',
          message: 'Gateway Timeout',
          stacktrace: error.stack,
        });
      } else {
        if (res.headers.get('Content-Type')?.startsWith('application/json')) {
          throw UserFriendlyError.fromAny(await res.json());
        } else {
          throw UserFriendlyError.fromAny(await res.text());
        }
      }
    }

    return res;
  };
}
