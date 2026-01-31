import {
  createORMClient,
  LiveData,
  ObjectPool,
  Service,
  YjsDBAdapter,
} from '@lovenotes/infra';
import { Doc as YDoc } from 'yjs';

import type { WorkspaceServerService } from '../../cloud';
import { AuthService } from '../../cloud/services/auth';
import type { WorkspaceService } from '../../workspace';
import { WorkspaceDB, type WorkspaceDBWithTables } from '../entities/db';
import {
  LoveNotes_WORKSPACE_DB_SCHEMA,
  LoveNotes_WORKSPACE_USERDATA_DB_SCHEMA,
  type LoveNotesWorkspaceDbSchema,
  type LoveNotesWorkspaceUserdataDbSchema,
} from '../schema';

const WorkspaceDBClient = createORMClient(LoveNotes_WORKSPACE_DB_SCHEMA);
const WorkspaceUserdataDBClient = createORMClient(
  LoveNotes_WORKSPACE_USERDATA_DB_SCHEMA
);

export class WorkspaceDBService extends Service {
  db: WorkspaceDBWithTables<LoveNotesWorkspaceDbSchema>;
  userdataDBPool = new ObjectPool<
    string,
    WorkspaceDB<LoveNotesWorkspaceUserdataDbSchema>
  >({
    onDangling() {
      return false; // never release
    },
  });

  constructor(
    private readonly workspaceService: WorkspaceService,
    private readonly workspaceServerService: WorkspaceServerService
  ) {
    super();
    this.db = this.framework.createEntity(
      WorkspaceDB<LoveNotesWorkspaceDbSchema>,
      {
        db: new WorkspaceDBClient(
          new YjsDBAdapter(LoveNotes_WORKSPACE_DB_SCHEMA, {
            getDoc: guid => {
              const ydoc = new YDoc({
                // guid format: db${guid}
                guid: `db$${guid}`,
              });
              this.workspaceService.workspace.engine.doc.connectDoc(ydoc);
              this.workspaceService.workspace.engine.doc.addPriority(
                ydoc.guid,
                50
              );
              return ydoc;
            },
          })
        ),
        schema: LoveNotes_WORKSPACE_DB_SCHEMA,
        storageDocId: tableName => `db$${tableName}`,
      }
    ) as WorkspaceDBWithTables<LoveNotesWorkspaceDbSchema>;
  }

  userdataDB(userId: (string & {}) | '__local__') {
    // __local__ for local workspace
    const userdataDb = this.userdataDBPool.get(userId);
    if (userdataDb) {
      return userdataDb.obj as WorkspaceDBWithTables<LoveNotesWorkspaceUserdataDbSchema>;
    }

    const newDB = this.framework.createEntity(
      WorkspaceDB<LoveNotesWorkspaceUserdataDbSchema>,
      {
        db: new WorkspaceUserdataDBClient(
          new YjsDBAdapter(LoveNotes_WORKSPACE_USERDATA_DB_SCHEMA, {
            getDoc: guid => {
              const ydoc = new YDoc({
                // guid format: userdata${userId}${guid}
                guid: `userdata$${userId}$${guid}`,
              });
              this.workspaceService.workspace.engine.doc.connectDoc(ydoc);
              this.workspaceService.workspace.engine.doc.addPriority(
                ydoc.guid,
                50
              );
              return ydoc;
            },
          })
        ),
        schema: LoveNotes_WORKSPACE_USERDATA_DB_SCHEMA,
        storageDocId: tableName => `userdata$${userId}$${tableName}`,
      }
    );

    this.userdataDBPool.put(userId, newDB);
    return newDB as WorkspaceDBWithTables<LoveNotesWorkspaceUserdataDbSchema>;
  }

  authService = this.workspaceServerService.server?.scope.get(AuthService);
  public get userdataDB$() {
    // if is local workspace or no account, use __local__ userdata
    // sometimes we may have cloud workspace but no account for a short time, we also use __local__ userdata
    if (
      this.workspaceService.workspace.meta.flavour === 'local' ||
      !this.authService
    ) {
      return new LiveData(this.userdataDB('__local__'));
    } else {
      return this.authService.session.account$.map(account => {
        if (!account) {
          return this.userdataDB('__local__');
        }
        return this.userdataDB(account.id);
      });
    }
  }

  static isDBDocId(docId: string) {
    return docId.startsWith('db$') || docId.startsWith('userdata$');
  }
}
