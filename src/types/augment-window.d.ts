/**
 * This is a modified version of the augment-window.d.ts file included in
 * the NodeCG types, but allows us to automatically receive the configuration types.
 */

import type { NodeCGAPIClient } from '@nodecg/types/client/api/api.client';
import type { Configschema } from './schemas/configschema.d.ts';

declare global {
  var NodeCG: typeof NodeCGAPIClient;
  var nodecg: NodeCGAPIClient<Configschema>;
}
