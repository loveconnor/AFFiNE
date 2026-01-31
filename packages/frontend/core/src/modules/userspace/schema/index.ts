import { type DBSchemaBuilder, f } from '@lovenotes/infra';

export const USER_DB_SCHEMA = {
  editorSetting: {
    key: f.string().primaryKey(),
    value: f.string(),
  },
} as const satisfies DBSchemaBuilder;
export type UserDbSchema = typeof USER_DB_SCHEMA;
