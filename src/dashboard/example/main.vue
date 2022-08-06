<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { ref } from 'vue';

useHead({ title: 'example' });

const text = ref('Example');
</script>

<template>
  <div class="q-pa-md">
    {{ text }}
    <br><br>
    <img src="./image.png" :style="{ width: '100%', display: 'block' }">
  </div>
</template>
