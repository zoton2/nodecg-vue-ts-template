<script setup lang="ts">
import { ExampleType } from '@nodecg-vue-ts-template/types';
import { ExampleReplicant } from '@nodecg-vue-ts-template/types/schemas';
import { useHead } from '@unhead/vue';
import { useReplicant } from 'nodecg-vue-composable';
import { ref } from 'vue';

const text = ref('Example');

// Set the title of this page.
useHead({ title: 'example' });

// Helper composable to make accessing/modifying replicants easier.
// For more information see https://github.com/Dan-Shields/nodecg-vue-composable
const exampleReplicant = useReplicant<ExampleReplicant>(
  'exampleReplicant',
  'nodecg-vue-ts-template',
);

// Accessing normal types.
const exampleType: ExampleType = { exampleProperty: 'exampleString' };
</script>

<template>
  <div>
    {{ text }}
    <br><br>
    <img src="./image.png">
  </div>
</template>
