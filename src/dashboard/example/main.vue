<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { ref } from 'vue';

useHead({ title: 'example' });

const text = ref('Example');
</script>

<template>
  {{ text }}
  <br><br>
  <img src="./image.png" :style="{ width: '100%' }">
</template>
