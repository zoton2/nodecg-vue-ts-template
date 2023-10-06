/* eslint-disable global-require */

// This must go first so we can use module aliases!
/* eslint-disable import/first */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('module-alias').addAlias('@nodecg-vue-ts-template', require('path').join(__dirname, '.'));

import { Configschema } from '@nodecg-vue-ts-template/types/schemas';
import type NodeCG from '@nodecg/types';
import { set } from './util/nodecg';

export = (nodecg: NodeCG.ServerAPI<Configschema>): void => {
  /**
   * Because of how `import`s work, it helps to use `require`s to force
   * things to be loaded *after* the NodeCG context is set.
   */
  set(nodecg);
  require('./example');
};
