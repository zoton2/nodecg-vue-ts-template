<template>
  <div>
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import type { ExampleType } from '@/types';
import type { ExampleReplicant } from '@/schemas';
import type { Configschema } from '@/configschema';
import { replicantModule, replicantNS, ReplicantTypes } from '@/browser_shared/replicant_store';
// import { State2Way } from 'vuex-class-state2way';

@Component
export default class extends Vue {
  text = 'Example';

  // If you want to read and write as if it was a variable, this works.
  @replicantNS.State reps!: ReplicantTypes; // Read all replicants.
  get exampleReplicant(): ExampleReplicant {
    return this.reps.exampleReplicant;
  }
  set exampleReplicant(val: ExampleReplicant) {
    replicantModule.setReplicant<ExampleReplicant>({ name: 'exampleReplicant', val });
  }

  // You can use State2Way as well, but it's more convoluted, and needs a specific mutation.
  /* @State2Way(
    'ReplicantModule/setExampleReplicant',
    (state) => state.ReplicantModule.reps.exampleReplicant,
  ) exampleReplicant!: ExampleReplicant; */

  // If you want to just read a replicant, you could do this.
  // @replicantNS.State((state) => state.reps.exampleReplicant) exampleReplicant!: ExampleReplicant;

  // Access the bundle configuration with types.
  config = nodecg.bundleConfig as Configschema;

  // Accessing normal types.
  exampleType: ExampleType = { exampleProperty: 'exampleString' };

  mounted(): void {
    // If you are using State2Way or the getter/setting you could then do this.
    this.exampleReplicant = { exampleProperty: `exampleString_Changed_${Date.now()}` };
  }
}
</script>
