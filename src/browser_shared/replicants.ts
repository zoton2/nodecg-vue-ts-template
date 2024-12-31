import { useReplicant } from 'nodecg-vue-composable';
import type { Schemas } from '../types';

// YOU MUST CHANGE THIS TO YOUR BUNDLE'S NAME!
const thisBundle = 'nodecg-vue-ts-template';

/**
 * This is where you can declare all of your replicants to import easily into other (browser based) files.
 * "useReplicant" is a helper composable to make accessing/modifying replicants easier.
 * For more information see https://github.com/Dan-Shields/nodecg-vue-composable
 */
export const exampleReplicant = useReplicant<Schemas.ExampleReplicant>('exampleReplicant', thisBundle);
