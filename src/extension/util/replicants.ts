/* eslint-disable max-len */

import type { ExampleReplicant } from '@nodecg-vue-ts-template/types/schemas';
import type NodeCG from '@nodecg/types';
import { join } from 'path';
import { get as nodecg } from './nodecg';

// Wrappers to help with the mess of typings with replicants.
function wrapper<T>(name: string) {
  // This path is relative to built files!
  const path = join(__dirname, `../../schemas/${name}.json`);
  return nodecg().Replicant<T>(name, { schemaPath: path }) as
    unknown as T;
}
// Wrapper for replicants that have a default (based on schema).
function hasDefault<T>(name: string) {
  return wrapper<NodeCG.ServerReplicantWithSchemaDefault<T>>(name);
}
// Wrapper for replicants that don't have a default (based on schema).
function hasNoDefault<T>(name: string) {
  return wrapper<NodeCG.ServerReplicant<T>>(name);
}

/**
 * This is where you can declare all your replicant to import easily into other files,
 * and to make sure they have any correct settings on startup.
 */

// YOU CAN REMOVE THIS RULE WHEN YOU GET MULTIPLE REPLICANTS!
// eslint-disable-next-line import/prefer-default-export
export const exampleReplicant = hasDefault<ExampleReplicant>('exampleReplicant');
