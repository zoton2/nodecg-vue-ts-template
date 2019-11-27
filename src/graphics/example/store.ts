import clone from 'clone';
import { ReplicantBrowser } from 'nodecg/types/browser';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

// Replicants and their types
const reps: {
  replicantName: ReplicantBrowser<any>;
  [k: string]: ReplicantBrowser<unknown>;
} = {
  replicantName: nodecg.Replicant('replicantName'),
};

// Types for mutations below
export type ExampleMutation = (arg: any) => void;

const store = new Vuex.Store({
  state: {},
  mutations: {
    setState(state, { name, val }): void {
      Vue.set(state, name, val);
    },
    /* Mutations to replicants start */
    exampleMutation(arg): void {
      // You may need to do checks like these, depending on mutation content.
      if (typeof reps.replicantName.value !== 'undefined') {
        reps.replicantName.value = clone(arg);
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

export default async function (): Promise<Store<{}>> {
  return NodeCG.waitForReplicants(
    ...Object.keys(reps).map((key) => reps[key]),
  ).then(() => store);
}
