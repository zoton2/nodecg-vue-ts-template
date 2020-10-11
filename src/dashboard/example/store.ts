import type { ExampleReplicant } from '@/schemas';
import clone from 'clone';
import type { ReplicantBrowser } from 'nodecg/types/browser';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

// Replicants and their types
const reps: {
  exampleReplicant: ReplicantBrowser<ExampleReplicant>;
  [k: string]: ReplicantBrowser<unknown>;
} = {
  exampleReplicant: nodecg.Replicant('exampleReplicant'),
};

// Types for mutations below
export type ExampleMutation = (arg: any) => void;

const store = new Store({
  state: {},
  mutations: {
    setState(state, { name, val }): void {
      Vue.set(state, name, val);
    },
    /* Mutations to replicants start */
    exampleMutation(arg: any): void {
      // You may need to do checks like these, depending on mutation content.
      if (typeof reps.exampleReplicant.value !== 'undefined') {
        reps.exampleReplicant.value = clone(arg);
      }
    },
    /* Mutations to replicants end */
  },
});

Object.keys(reps).forEach((key) => {
  reps[key].on('change', (val) => {
    store.commit('setState', { name: key, val: clone(val) });
  });
});

export default async (): Promise<Store<Record<string, unknown>>> => {
  await NodeCG.waitForReplicants(...Object.keys(reps).map((key) => reps[key]));
  return store;
};
