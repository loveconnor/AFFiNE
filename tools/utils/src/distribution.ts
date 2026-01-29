import { PackageList, type PackageName } from './yarn';

export const PackageToDistribution = new Map<
  PackageName,
  BUILD_CONFIG_TYPE['distribution']
>([
  ['@lovenotes/admin', 'admin'],
  ['@lovenotes/web', 'web'],
  ['@lovenotes/electron-renderer', 'desktop'],
  ['@lovenotes/electron', 'desktop'],
  ['@lovenotes/mobile', 'mobile'],
  ['@lovenotes/ios', 'ios'],
  ['@lovenotes/android', 'android'],
]);

export const AliasToPackage = new Map<string, PackageName>([
  ['admin', '@lovenotes/admin'],
  ['web', '@lovenotes/web'],
  ['electron', '@lovenotes/electron'],
  ['desktop', '@lovenotes/electron-renderer'],
  ['renderer', '@lovenotes/electron-renderer'],
  ['mobile', '@lovenotes/mobile'],
  ['ios', '@lovenotes/ios'],
  ['android', '@lovenotes/android'],
  ['server', '@lovenotes/server'],
  ['gql', '@lovenotes/graphql'],
  ...PackageList.map(
    pkg => [pkg.name.split('/').pop()!, pkg.name] as [string, PackageName]
  ),
]);
