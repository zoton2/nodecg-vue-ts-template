<template>
  <v-app>
    {{ text }}
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import type { ExampleType } from '@/types';
import type { ExampleReplicant } from '@/schemas';
import type { Configschema } from '@/configschema';
// import { State, Mutation } from 'vuex-class';
import { State2Way } from 'vuex-class-state2way';
import { exampleString } from '@/browser_shared/example';

@Component
export default class extends Vue {
  // Declaring a replicant (for both read and write).
  @State2Way('exampleMutation', 'exampleReplicant') exampleReplicant!: ExampleReplicant;

  // Access the bundle configuration with types.
  config = nodecg.bundleConfig as Configschema;

  // Accessing normal types.
  exampleType: ExampleType = { exampleProperty: 'exampleString' };

  text = exampleString();
}
</script>
