import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../pages/UserLogin.vue';
import ProductPage from '../pages/ProductPage.vue';
import RegisterPage from '../pages/UserRegister.vue';
import CartPage from '../pages/UserCart.vue';

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
},
{
  path: '/register',
  name: 'Register',
  component: RegisterPage
},
{
  path: '/cart',
  name: 'Cart',
  component: CartPage
}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
