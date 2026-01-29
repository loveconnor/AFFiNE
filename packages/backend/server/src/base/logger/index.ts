import { Global, Module } from '@nestjs/common';

import { ConfigModule } from '../config';
import { LoveNotesLogger } from './service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [LoveNotesLogger],
  exports: [LoveNotesLogger],
})
export class LoggerModule {}

export { LoveNotesLogger } from './service';
