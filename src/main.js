import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import './assets/tailwind.css';
import router from './router/routes.js';

const pinia = createPinia()
const app = createApp(App);
app.use(router);

app.use(pinia)
app.mount('#app');