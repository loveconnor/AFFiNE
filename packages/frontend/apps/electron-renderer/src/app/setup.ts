import '@lovenotes/core/bootstrap/electron';
import '@lovenotes/core/bootstrap/cleanup';
import '@lovenotes/component/theme';
import './global.css';

import { apis } from '@lovenotes/electron-api';
import { bindNativeDBApis } from '@lovenotes/nbstore/sqlite';
import { bindNativeDBV1Apis } from '@lovenotes/nbstore/sqlite/v1';

// oxlint-disable-next-line no-non-null-assertion
bindNativeDBApis(apis!.nbstore);
// oxlint-disable-next-line no-non-null-assertion
bindNativeDBV1Apis(apis!.db);
