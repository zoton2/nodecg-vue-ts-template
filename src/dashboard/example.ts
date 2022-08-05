import { Dark, Quasar } from 'quasar';
import 'quasar/dist/quasar.css';
import { createApp } from 'vue';
import App from './example/main.vue';

const app = createApp(App);
app.use(Quasar);
app.mount('#app');
Dark.set(true);
