import type { ExampleType } from '../types/index.js';
import { nodecg } from './util/nodecg.js';
import { exampleReplicant } from './util/replicants.js';

// Example code:
// Log to show things are working.
nodecg.log.info('Extension code working!');
// Access this bundle's configuration with no type assertion needed.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const configProperty = nodecg.bundleConfig.exampleProperty;
// Access/set a replicant (also see ./util/replicants).
exampleReplicant.value = { exampleProperty: `exampleString_Changed_${Date.now()}` };
// Accessing normal types.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const exampleType: ExampleType = { exampleProperty: 'exampleString' };
