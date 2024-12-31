import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/roboto-font/roboto-font.css';
import { createHead } from '@unhead/vue';
import { Dark, Quasar } from 'quasar';
import 'quasar/dist/quasar.css';
import 'quasar/src/css/index.sass';
import { createApp } from 'vue';
import App from './main.vue';

const app = createApp(App);
const head = createHead();
app.use(Quasar);
app.use(head);
app.mount('#app');
Dark.set(true);
