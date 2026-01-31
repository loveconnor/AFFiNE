import { Service } from '@lovenotes/infra';

import { Invoices } from '../entities/invoices';

export class InvoicesService extends Service {
  invoices = this.framework.createEntity(Invoices);
}
