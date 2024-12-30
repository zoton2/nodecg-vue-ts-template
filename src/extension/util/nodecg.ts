import type { NodeCGServerAPI } from '../../types/index.js';

let nodecg: NodeCGServerAPI;

export function set(ctx: NodeCGServerAPI) {
  nodecg = ctx;
}

export function get(): NodeCGServerAPI {
  return nodecg;
}
