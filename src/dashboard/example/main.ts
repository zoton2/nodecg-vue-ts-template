import Vue, { VNode } from 'vue';
import vuetify from '../_misc/vuetify';
import App from './main.vue';

new Vue({
  vuetify,
  el: '#App',
  render: (h): VNode => h(App),
});
