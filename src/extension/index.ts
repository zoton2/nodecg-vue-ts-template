import type NodeCG from '@nodecg/types';
import type { Configschema } from '../types/schemas/configschema.js';
import { set } from './util/nodecg.js';

export default async (nodecg: NodeCG.default.ServerAPI<Configschema>) => {
  /**
   * Because of how top-level `import`s work, it helps to use `import`s here
   * to force things to be loaded *after* the NodeCG context is set.
   */
  set(nodecg);
  await import('./example.js');
};
