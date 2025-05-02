import { createHead } from '@unhead/vue/client';
import { createApp } from 'vue';
import App from './main.vue';

const app = createApp(App);
const head = createHead();
app.use(head);
app.mount('#app');
