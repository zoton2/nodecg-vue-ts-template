/* eslint-disable @typescript-eslint/no-explicit-any */

import clone from 'clone';
import { ReplicantBrowser } from 'nodecg/types/browser'; // eslint-disable-line
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

const replicantNames = [
  'replicantName',
];
const replicants: ReplicantBrowser<unknown>[] = [];

export const store = new Vuex.Store({
  state: {
    replicantName: undefined as any,
  },
  mutations: {
    updateReplicant(state, { name, value }): void {
      Vue.set(state, name, value);
    },
  },
});

replicantNames.forEach((name) => {
  const replicant = nodecg.Replicant(name);

  replicant.on('change', (newVal) => {
    store.commit('updateReplicant', {
      name: replicant.name,
      value: clone(newVal),
    });
  });

  replicants.push(replicant);
});

export async function create(): Promise<Store<{ replicantName: any }>> {
  return NodeCG.waitForReplicants(...replicants).then(() => store);
}
