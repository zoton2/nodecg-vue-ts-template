import Vue, { VNode } from 'vue';
import App from './main.vue';

new Vue({
  el: '#App',
  render: (h): VNode => h(App),
});
