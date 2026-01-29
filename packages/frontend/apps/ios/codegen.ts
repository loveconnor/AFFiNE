import { execSync } from 'node:child_process';

import { ProjectRoot } from '@lovenotes-tools/utils/path';
import { Package } from '@lovenotes-tools/utils/workspace';

const iosPackage = new Package('@lovenotes/ios');

const PackageRoot = iosPackage.path;

console.log('[*] PackageRoot', PackageRoot);

const version = process.argv[2] || '1.23.0'; // Default to 1.23.0 if no version provided

console.log('[*] graphql...');
execSync(`${PackageRoot}/apollo-codegen-chore.sh "${version}"`, {
  stdio: 'inherit',
});

console.log('[*] rust...');
execSync(
  'cargo build -p lovenotes_mobile_native --features use-as-lib --lib --release --target aarch64-apple-ios',
  {
    stdio: 'inherit',
  }
);

execSync(
  `cargo run -p lovenotes_mobile_native --features use-as-lib --bin uniffi-bindgen generate \
  --library ${ProjectRoot}/target/aarch64-apple-ios/release/liblovenotes_mobile_native.a \
  --language swift --out-dir ${PackageRoot}/App/App/uniffi`,
  { stdio: 'inherit' }
);

console.log('[+] codegen complete');
