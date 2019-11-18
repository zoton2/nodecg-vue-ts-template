import clone from 'clone';
import { ReplicantBrowser } from 'nodecg/types/browser'; // eslint-disable-line import/no-unresolved
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

const replicantList: { name: string; bundle?: string }[] = [
  { name: 'replicantName', bundle: 'bundleName' },
];
const replicants: ReplicantBrowser<unknown>[] = [];

interface StoreTypes {
  replicantName: unknown;
}

export const store = new Vuex.Store<StoreTypes>({
  mutations: {
    updateReplicant(state, { name, value }): void {
      Vue.set(state, name, value);
    },
  },
});

replicantList.forEach((obj) => {
  const replicant = nodecg.Replicant(obj.name, obj.bundle || 'nodecg-vue-ts-template');

  replicant.on('change', (newVal) => {
    store.commit('updateReplicant', {
      name: replicant.name,
      value: clone(newVal),
    });
  });

  replicants.push(replicant);
});

export async function create(): Promise<Store<StoreTypes>> {
  return NodeCG.waitForReplicants(...replicants).then(() => store);
}
