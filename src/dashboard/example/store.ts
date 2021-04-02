import { replicantModule, ReplicantModule, ReplicantTypes } from '@nodecg-vue-ts-template/browser_shared/replicant_store';
import { ExampleReplicant } from '@nodecg-vue-ts-template/types/schemas';
import clone from 'clone';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { Action, getModule, Module, VuexModule } from 'vuex-module-decorators';

Vue.use(Vuex);

@Module({ name: 'OurModule' })
class OurModule extends VuexModule {
  // Helper getter to return all replicants.
  get reps(): ReplicantTypes {
    return this.context.rootState.ReplicantModule.reps;
  }

  // Helper getter to return a specific replicant.
  get exampleReplicant(): ExampleReplicant {
    return this.reps.exampleReplicant;
  }

  // Action that uses the generic mutation in replicant_store.ts
  // You could do anything here to successfully set a whole new value.
  // Here, I clone the original and tweak one property on the object.
  // You could also put this in the replicant_store.ts file if used repeatedly.
  @Action
  updateExampleReplicantProperty(str: string): void {
    const val = { ...clone(this.exampleReplicant), ...{ exampleProperty: str } };
    replicantModule.setReplicant<ExampleReplicant>({ name: 'exampleReplicant', val });
  }
}

const store = new Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: { ReplicantModule, OurModule },
});
export default store;
export const storeModule = getModule(OurModule, store);
