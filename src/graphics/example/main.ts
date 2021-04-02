/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import { setUpReplicants } from '@nodecg-vue-ts-template/browser_shared/replicant_store';
import Vue from 'vue';
import App from './main.vue';
import store from './store';

setUpReplicants(store).then(() => {
  new Vue({
    store,
    el: '#App',
    render: (h) => h(App),
  });
});
