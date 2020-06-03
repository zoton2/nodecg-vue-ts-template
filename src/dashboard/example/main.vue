<template>
  <v-app>
    {{ text }}
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import { State, Mutation } from 'vuex-class';
// import { State2Way } from 'vuex-class-state2way';

@Component
export default class extends Vue {
  text = 'Example';
}
</script>
