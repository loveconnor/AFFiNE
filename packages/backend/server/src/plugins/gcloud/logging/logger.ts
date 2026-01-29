import { WinstonLogger } from 'nest-winston';

import { LoveNotesLogger as RawLoveNotesLogger } from '../../../base/logger';

export class LoveNotesLogger extends WinstonLogger {
  override error(
    message: any,
    stackOrError?: Error | string | unknown,
    context?: string
  ) {
    super.error(
      message,
      RawLoveNotesLogger.formatStack(stackOrError) as string,
      context
    );
  }
}
