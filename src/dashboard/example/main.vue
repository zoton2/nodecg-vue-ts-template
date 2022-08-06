<script setup lang="ts">
import { ExampleType } from '@nodecg-vue-ts-template/types';
import { Configschema } from '@nodecg-vue-ts-template/types/schemas';
import { useHead } from '@vueuse/head';
import { ref } from 'vue';

const text = ref('Example');

// Set the title of this page.
useHead({ title: 'example' });

// Access the bundle configuration with types.
const config = nodecg.bundleConfig as Configschema;

// Accessing normal types.
const exampleType: ExampleType = { exampleProperty: 'exampleString' };
</script>

<template>
  {{ text }}
  <br><br>
  <img src="./image.png" :style="{ width: '100%' }">
</template>
