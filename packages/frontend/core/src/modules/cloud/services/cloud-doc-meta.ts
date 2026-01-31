import { Service } from '@lovenotes/infra';

import { CloudDocMeta } from '../entities/cloud-doc-meta';

export class CloudDocMetaService extends Service {
  cloudDocMeta = this.framework.createEntity(CloudDocMeta);
}
