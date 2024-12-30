import type { NodeCGServerAPI } from '../types/index.js';
import { set } from './util/nodecg.js';

export default async (nodecg: NodeCGServerAPI) => {
  /**
   * Because of how top-level `import`s work, it helps to use `import`s here
   * to force things to be loaded *after* the NodeCG context is set.
   */
  set(nodecg);
  await import('./example.js');
};
