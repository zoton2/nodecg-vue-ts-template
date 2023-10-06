import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/mdi-v6/mdi-v6.css';
import '@quasar/extras/roboto-font/roboto-font.css';
import { createHead } from '@unhead/vue';
import { Dark, Quasar } from 'quasar';
import 'quasar/dist/quasar.css';
import { createApp } from 'vue';
import App from './example/main.vue';

const app = createApp(App);
const head = createHead();
app.use(Quasar, {});
app.use(head);
app.mount('#app');
Dark.set(true);
