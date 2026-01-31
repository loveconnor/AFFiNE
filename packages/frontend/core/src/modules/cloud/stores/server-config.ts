import {
  gqlFetcherFactory,
  type OauthProvidersQuery,
  oauthProvidersQuery,
  type ServerConfigQuery,
  serverConfigQuery,
  ServerDeploymentType,
  ServerFeature,
} from '@lovenotes/graphql';
import { Store } from '@lovenotes/infra';

export type ServerConfigType = ServerConfigQuery['serverConfig'] &
  OauthProvidersQuery['serverConfig'];

export class ServerConfigStore extends Store {
  constructor() {
    super();
  }

  async fetchServerConfig(
    serverBaseUrl: string,
    abortSignal?: AbortSignal
  ): Promise<ServerConfigType> {
    if (BUILD_CONFIG.isElectron && serverBaseUrl.startsWith('assets://')) {
      return {
        baseUrl: serverBaseUrl,
        name: 'LoveNotes Local',
        type: ServerDeploymentType.Selfhosted,
        version: BUILD_CONFIG.appVersion,
        initialized: true,
        calendarProviders: [],
        features: [ServerFeature.LocalWorkspace],
        credentialsRequirement: {
          password: {
            minLength: 8,
            maxLength: 32,
          },
        },
        oauthProviders: [],
      };
    }

    const gql = gqlFetcherFactory(`${serverBaseUrl}/graphql`, globalThis.fetch);
    const serverConfigData = await gql({
      query: serverConfigQuery,
      context: {
        signal: abortSignal,
        headers: {
          'x-lovenotes-version': BUILD_CONFIG.appVersion,
        },
      },
    });
    if (serverConfigData.serverConfig.features.includes(ServerFeature.OAuth)) {
      const oauthProvidersData = await gql({
        query: oauthProvidersQuery,
        context: {
          signal: abortSignal,
          headers: {
            'x-lovenotes-version': BUILD_CONFIG.appVersion,
          },
        },
      });
      return {
        ...serverConfigData.serverConfig,
        ...oauthProvidersData.serverConfig,
      };
    }
    return { ...serverConfigData.serverConfig, oauthProviders: [] };
  }
}
