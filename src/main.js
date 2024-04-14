import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router/routes.js'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';


const app = createApp(App);
app.use(router);

app.use(Toast, {
  position: 'center',
  icon: true,
  transition: "Vue-Toastification__bounce",
});

app.mount('#app');