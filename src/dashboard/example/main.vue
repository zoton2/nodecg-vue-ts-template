<template>
  <v-app>
    {{ text }}
    <br><br>
    <img src="./image.png">
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import type { ExampleType } from '@nodecg-vue-ts-template/types';
import type { ExampleReplicant } from '@nodecg-vue-ts-template/types/schemas';
import type { Configschema } from '@nodecg-vue-ts-template/types/schemas/configschema';
import { Getter } from 'vuex-class';
// import { replicantNS } from '@nodecg-vue-ts-template/browser_shared/replicant_store';
import { storeModule } from './store';

@Component
export default class extends Vue {
  text = 'Example';
  @Getter readonly exampleReplicant!: ExampleReplicant; // from store.ts

  // If you want to just read a replicant without assigning a getter anywhere, you can do this too.
  /* @replicantNS.State(
    (s) => s.reps.exampleReplicant,
  ) readonly exampleReplicant!: ExampleReplicant; */

  // Access the bundle configuration with types.
  config = nodecg.bundleConfig as Configschema;

  // Accessing normal types.
  exampleType: ExampleType = { exampleProperty: 'exampleString' };

  created(): void {
    // Call something from your store when you want to update a replicant.
    storeModule.updateExampleReplicantProperty(`exampleString_Changed_${Date.now()}`);
  }
}
</script>
