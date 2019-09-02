<template>
  <div id="App">
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      text: 'Example',
    };
  },
});
</script>

<style>
  #App {
    color: green;
  }
</style>
