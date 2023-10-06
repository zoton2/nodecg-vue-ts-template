import { createHead } from '@unhead/vue';
import { createApp } from 'vue';
import App from './example/main.vue';

const app = createApp(App);
const head = createHead();
app.use(head);
app.mount('#app');
