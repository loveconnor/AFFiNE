import { spawnSync } from 'node:child_process';

spawnSync('yarn', ['r', 'lovenotes.ts', ...process.argv.slice(2)], {
  stdio: 'inherit',
});
