import type { ExampleType } from '@nodecg-vue-ts-template/types';
import { get as nodecg } from './util/nodecg';
import { exampleReplicant } from './util/replicants';

nodecg().log.info('Extension code working!');

// Access/set a replicant (also see ./util/replicants).
exampleReplicant.value = { exampleProperty: `exampleString_Changed_${Date.now()}` };

// Accessing normal types.
const exampleType: ExampleType = { exampleProperty: 'exampleString' };
