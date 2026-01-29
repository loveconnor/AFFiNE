import type { PackageName } from '@lovenotes-tools/utils/workspace';

import { Option, PackageSelectorCommand } from './command';

export class DevCommand extends PackageSelectorCommand {
  static override paths = [['dev'], ['d']];

  protected override availablePackages: PackageName[] = [
    '@lovenotes/web',
    '@lovenotes/server',
    '@lovenotes/electron',
    '@lovenotes/electron-renderer',
    '@lovenotes/mobile',
    '@lovenotes/ios',
    '@lovenotes/android',
    '@lovenotes/admin',
  ];

  protected deps = Option.Boolean('--deps', {
    description: 'Run dev with dependencies',
  });

  async execute() {
    const name = await this.getPackage();
    const args = [];

    if (this.deps) {
      args.push('--deps');
    }

    args.push(name, 'dev');

    await this.cli.run(args);
  }
}
