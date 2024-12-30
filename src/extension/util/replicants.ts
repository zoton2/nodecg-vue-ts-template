/* eslint-disable max-len */

import type NodeCG from '@nodecg/types';
import type { Schemas } from '../../types/index.js';
import { get as nodecg } from './nodecg.js';

// Wrapper for replicants that have a default (based on schema).
function hasDefault<T>(name: string) {
  return nodecg().Replicant<T>(name) as unknown as NodeCG.default.ServerReplicantWithSchemaDefault<T>;
}
// Wrapper for replicants that don't have a default (based on schema).
function hasNoDefault<T>(name: string) {
  return nodecg().Replicant<T>(name) as NodeCG.default.ServerReplicant<T>;
}

/**
 * This is where you can declare all of your replicants to import easily into other files,
 * and to make sure they have any correct settings on startup.
 */

// YOU CAN REMOVE THIS RULE WHEN YOU GET MULTIPLE REPLICANTS!
// eslint-disable-next-line import/prefer-default-export
export const exampleReplicant = hasDefault<Schemas.ExampleReplicant>('exampleReplicant');
