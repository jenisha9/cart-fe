import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../pages/UserLogin.vue';
import Home from '../pages/HomePage.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: LoginPage
}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
