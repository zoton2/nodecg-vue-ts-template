import type NodeCG from '@nodecg/types';
import type { Configschema } from './schemas.d.ts';

export type NodeCGServerAPI = NodeCG.default.ServerAPI<Configschema>;
export type { ExampleType } from './ExampleType.d.ts';
export type * as Schemas from './schemas.d.ts';
