<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { ref } from 'vue';
import { exampleReplicant } from '../../browser_shared/replicants';
import type { ExampleType } from '../../types';

useHead({ title: 'example' }); // set the title of this page
const text = ref('Example');

// Example code: accessing normal types.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const exampleType: ExampleType = { exampleProperty: 'exampleString' };
</script>

<template>
  <div>
    {{ text }}
    <br><br>
    <img
      src="./image.png"
      :style="{ width: '100%' }"
    >
    <br><br>
    <QBtn
      color="primary"
      label="Example"
    />
    <br><br>
    <!-- Example code: accessing a replicant. -->
    {{ exampleReplicant?.data?.exampleProperty }}
  </div>
</template>
