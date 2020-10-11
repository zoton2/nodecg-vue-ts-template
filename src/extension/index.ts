// This must go first so we can use module aliases!
/* eslint-disable import/first */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('module-alias').addAlias('@', require('path').join(__dirname, '.'));

import type { Configschema } from '@/configschema';
import type { ExampleReplicant } from '@/schemas';
import type { ExampleType } from '@/types';
import type { NodeCG } from 'nodecg/types/server';
import { set } from './util/nodecg';

export = (nodecg: NodeCG): void => {
  set(nodecg);
  nodecg.log.info('Extension code working!');

  // Declaring a replicant.
  const exampleRep = nodecg.Replicant<ExampleReplicant>('exampleReplicant');

  // Access the bundle configuration with types.
  const config = nodecg.bundleConfig as Configschema;

  // Accessing normal types.
  const exampleType: ExampleType = { exampleProperty: 'exampleString' };
};
