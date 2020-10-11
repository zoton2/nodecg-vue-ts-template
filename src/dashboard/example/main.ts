/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import vuetify from '@/_misc/vuetify';
import Vue from 'vue';
import App from './main.vue';
import waitForReplicants from './store';

waitForReplicants().then((store) => {
  new Vue({
    vuetify,
    store,
    el: '#App',
    render: (h) => h(App),
  });
});
