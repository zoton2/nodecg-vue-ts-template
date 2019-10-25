/* eslint global-require: off */

import { NodeCG } from 'nodecg/types/server'; // eslint-disable-line import/no-unresolved
import { set } from './util/nodecg';

export = (nodecg: NodeCG): void => {
  set(nodecg);
  nodecg.log.info('Extension code working!');
};
