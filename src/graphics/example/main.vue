<script setup lang="ts">
import { ref } from 'vue';

const text = ref('Example');
</script>

<template>
  <div>
    {{ text }}
    <br><br>
    <img src="./image.png">
  </div>
</template>
