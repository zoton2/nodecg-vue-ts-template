import { Configschema } from '@nodecg-vue-ts-template/types/schemas';
import type NodeCG from '@nodecg/types';

let nodecg: NodeCG.ServerAPI<Configschema>;

export function set(ctx: NodeCG.ServerAPI<Configschema>): void {
  nodecg = ctx;
}

export function get(): NodeCG.ServerAPI<Configschema> {
  return nodecg;
}
