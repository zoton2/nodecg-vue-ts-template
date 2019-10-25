/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import * as replicantStore from '../../browser_shared/replicant-store';
import vuetify from '../_misc/vuetify';
import App from './main.vue';

replicantStore.create().then(() => {
  new Vue({
    vuetify,
    el: '#App',
    render: (h) => h(App),
  });
});
