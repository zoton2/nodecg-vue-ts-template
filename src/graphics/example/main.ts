/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import { create } from '../../browser_shared/replicant-store';
import App from './main.vue';

create().then((store) => {
  new Vue({
    store,
    el: '#App',
    render: (h) => h(App),
  });
});
