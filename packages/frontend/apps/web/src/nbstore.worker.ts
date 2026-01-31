import '@lovenotes/core/bootstrap/browser';

import { type MessageCommunicapable, OpConsumer } from '@lovenotes/infra/op';
import { broadcastChannelStorages } from '@lovenotes/nbstore/broadcast-channel';
import { cloudStorages } from '@lovenotes/nbstore/cloud';
import { idbStorages } from '@lovenotes/nbstore/idb';
import { idbV1Storages } from '@lovenotes/nbstore/idb/v1';
import {
  StoreManagerConsumer,
  type WorkerManagerOps,
} from '@lovenotes/nbstore/worker/consumer';

const consumer = new StoreManagerConsumer([
  ...idbStorages,
  ...idbV1Storages,
  ...broadcastChannelStorages,
  ...cloudStorages,
]);

if ('onconnect' in globalThis) {
  // if in shared worker

  (globalThis as any).onconnect = (event: MessageEvent) => {
    const port = event.ports[0];
    consumer.bindConsumer(new OpConsumer<WorkerManagerOps>(port));
  };
} else {
  // if in worker
  consumer.bindConsumer(
    new OpConsumer<WorkerManagerOps>(globalThis as MessageCommunicapable)
  );
}
