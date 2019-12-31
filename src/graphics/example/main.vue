<template>
  <div>
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import { State, Mutation } from 'vuex-class';

@Component
export default class extends Vue {
  text = 'Example';
}
</script>
