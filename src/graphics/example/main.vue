<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { ref } from 'vue';
import { exampleReplicant } from '../../browser_shared/replicants';
import type { ExampleType } from '../../types';

const text = ref('Example');

// Set the title of this page.
useHead({ title: 'example' });

// Accessing normal types.
const exampleType: ExampleType = { exampleProperty: 'exampleString' };
</script>

<template>
  <div>
    {{ text }}
    <br><br>
    <img src="./image.png">
    <br><br>
    {{ exampleReplicant?.data?.exampleProperty }}
  </div>
</template>
