<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { ref } from 'vue';

useHead({ title: 'example' });

const text = ref('Example');
</script>

<template>
  <div>
    {{ text }}
    <br><br>
    <img src="./image.png">
  </div>
</template>
