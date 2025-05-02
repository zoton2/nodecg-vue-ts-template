import type { NodeCGServerAPI } from '../../types/index.js';

export let nodecg!: NodeCGServerAPI;

export function set(ctx: NodeCGServerAPI) {
  nodecg = ctx;
}
