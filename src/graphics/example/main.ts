/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import * as replicantStore from '../../browser_shared/replicant-store';
import App from './main.vue';

replicantStore.create().then(() => {
  new Vue({
    el: '#App',
    render: (h) => h(App),
  });
});
