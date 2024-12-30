import type NodeCG from '@nodecg/types';
import type { Configschema } from '../../types/schemas/configschema.js';

let nodecg: NodeCG.default.ServerAPI<Configschema>;

export function set(ctx: NodeCG.default.ServerAPI<Configschema>): void {
  nodecg = ctx;
}

export function get(): NodeCG.default.ServerAPI<Configschema> {
  return nodecg;
}
