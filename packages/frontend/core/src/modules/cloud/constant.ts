import {
  OAuthProviderType,
  ServerDeploymentType,
  ServerFeature,
} from '@lovenotes/graphql';

import type { ServerConfig, ServerMetadata } from './types';

export const BUILD_IN_SERVERS: (ServerMetadata & { config: ServerConfig })[] =
  environment.isSelfHosted
    ? [
        {
          id: 'lovenotes-cloud',
          baseUrl: location.origin,
          // selfhosted baseUrl is `location.origin`
          // this is ok for web app, but not for desktop app
          // since we never build desktop app in selfhosted mode, so it's fine
          config: {
            serverName: 'LoveNotes Selfhost',
            features: [],
            oauthProviders: [],
            type: ServerDeploymentType.Selfhosted,
            credentialsRequirement: {
              password: {
                minLength: 8,
                maxLength: 32,
              },
            },
          },
        },
      ]
    : BUILD_CONFIG.debug
      ? [
          {
            id: 'lovenotes-cloud',
            baseUrl: BUILD_CONFIG.isElectron
              ? 'http://localhost:8080'
              : location.origin,
            config: {
              serverName: 'LoveNotes Cloud',
              features: [
                ServerFeature.Indexer,
                ServerFeature.Copilot,
                ServerFeature.CopilotEmbedding,
                ServerFeature.OAuth,
                ServerFeature.Payment,
                ServerFeature.LocalWorkspace,
              ],
              oauthProviders: [
                OAuthProviderType.Google,
                OAuthProviderType.Apple,
              ],
              type: ServerDeploymentType.LoveNotes,
              credentialsRequirement: {
                password: {
                  minLength: 8,
                  maxLength: 32,
                },
              },
            },
          },
        ]
      : BUILD_CONFIG.appBuildType === 'stable'
        ? [
            {
              id: 'lovenotes-cloud',
              baseUrl: BUILD_CONFIG.isNative
                ? BUILD_CONFIG.isIOS
                  ? 'https://apple.getlovenotesapp.com'
                  : 'https://app.lovenotes.pro'
                : location.origin,
              config: {
                serverName: 'LoveNotes Cloud',
                features: [
                  ServerFeature.Indexer,
                  ServerFeature.Copilot,
                  ServerFeature.CopilotEmbedding,
                  ServerFeature.OAuth,
                  ServerFeature.Payment,
                  ServerFeature.LocalWorkspace,
                ],
                oauthProviders: [
                  OAuthProviderType.Google,
                  OAuthProviderType.Apple,
                ],
                type: ServerDeploymentType.LoveNotes,
                credentialsRequirement: {
                  password: {
                    minLength: 8,
                    maxLength: 32,
                  },
                },
              },
            },
          ]
        : BUILD_CONFIG.appBuildType === 'beta'
          ? [
              {
                id: 'lovenotes-cloud',
                baseUrl: BUILD_CONFIG.isNative
                  ? BUILD_CONFIG.isIOS
                    ? 'https://apple.getlovenotesapp.com'
                    : 'https://insider.lovenotes.pro'
                  : location.origin,
                config: {
                  serverName: 'LoveNotes Cloud',
                  features: [
                    ServerFeature.Indexer,
                    ServerFeature.Copilot,
                    ServerFeature.CopilotEmbedding,
                    ServerFeature.OAuth,
                    ServerFeature.Payment,
                    ServerFeature.LocalWorkspace,
                  ],
                  oauthProviders: [
                    OAuthProviderType.Google,
                    OAuthProviderType.Apple,
                  ],
                  type: ServerDeploymentType.LoveNotes,
                  credentialsRequirement: {
                    password: {
                      minLength: 8,
                      maxLength: 32,
                    },
                  },
                },
              },
            ]
          : BUILD_CONFIG.appBuildType === 'internal'
            ? [
                {
                  id: 'lovenotes-cloud',
                  baseUrl: 'https://insider.lovenotes.pro',
                  config: {
                    serverName: 'LoveNotes Cloud',
                    features: [
                      ServerFeature.Indexer,
                      ServerFeature.Copilot,
                      ServerFeature.CopilotEmbedding,
                      ServerFeature.OAuth,
                      ServerFeature.Payment,
                      ServerFeature.LocalWorkspace,
                    ],
                    oauthProviders: [
                      OAuthProviderType.Google,
                      OAuthProviderType.Apple,
                    ],
                    type: ServerDeploymentType.LoveNotes,
                    credentialsRequirement: {
                      password: {
                        minLength: 8,
                        maxLength: 32,
                      },
                    },
                  },
                },
              ]
            : BUILD_CONFIG.appBuildType === 'canary'
              ? [
                  {
                    id: 'lovenotes-cloud',
                    baseUrl: BUILD_CONFIG.isNative
                      ? 'https://lovenotes.fail'
                      : location.origin,
                    config: {
                      serverName: 'LoveNotes Cloud',
                      features: [
                        ServerFeature.Indexer,
                        ServerFeature.Copilot,
                        ServerFeature.CopilotEmbedding,
                        ServerFeature.OAuth,
                        ServerFeature.Payment,
                        ServerFeature.LocalWorkspace,
                      ],
                      oauthProviders: [
                        OAuthProviderType.Google,
                        OAuthProviderType.Apple,
                      ],
                      type: ServerDeploymentType.LoveNotes,
                      credentialsRequirement: {
                        password: {
                          minLength: 8,
                          maxLength: 32,
                        },
                      },
                    },
                  },
                ]
              : [];

export type TelemetryChannel =
  | 'stable'
  | 'beta'
  | 'internal'
  | 'canary'
  | 'local';

const OFFICIAL_TELEMETRY_ENDPOINTS: Record<TelemetryChannel, string> = {
  stable: 'https://app.lovenotes.pro',
  beta: 'https://insider.lovenotes.pro',
  internal: 'https://insider.lovenotes.pro',
  canary: 'https://lovenotes.fail',
  local: 'http://localhost:8080',
};

export function getOfficialTelemetryEndpoint(
  channel = BUILD_CONFIG.appBuildType
): string {
  if (BUILD_CONFIG.debug) {
    return BUILD_CONFIG.isNative
      ? OFFICIAL_TELEMETRY_ENDPOINTS.local
      : location.origin;
  } else if (['beta', 'internal', 'canary', 'stable'].includes(channel)) {
    return OFFICIAL_TELEMETRY_ENDPOINTS[channel];
  }

  return OFFICIAL_TELEMETRY_ENDPOINTS.stable;
}
