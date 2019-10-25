<template>
  <div>
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
