import { NodeCG } from 'nodecg/types/server';
import { set } from './util/nodecg';

export = (nodecg: NodeCG): void => {
  set(nodecg);
  nodecg.log.info('Extension code working!');
};
