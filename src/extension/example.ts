import type { ExampleType } from '../types/index.js';
import { get as nodecg } from './util/nodecg.js';
import { exampleReplicant } from './util/replicants.js';

nodecg().log.info('Extension code working!');

// Access/set a replicant (also see ./util/replicants).
exampleReplicant.value = { exampleProperty: `exampleString_Changed_${Date.now()}` };

// Accessing normal types.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const exampleType: ExampleType = { exampleProperty: 'exampleString' };
