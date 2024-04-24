<template>
  <div>
    <!-- Header -->
    <header class="bg-pink-500 text-white py-4">
      <div class="container mx-auto flex justify-between items-center">
        <img v-if="token" src="@/assets/user.png" alt="Logo" class="h-8 mr-4">
        <h1 class="text-2xl hover:bg-pink-600 focus:bg-pink-600"></h1>
        <nav>
          <ul class="flex">
            <li class="mr-4"><a href="/products" class="text-white h-8 mr-4">Home</a></li>
            <li v-if="!token">
              <a href="/register" class="text-white h-8 mr-4">Register</a>
            </li>
            <button v-if="token" @click="handleLogout" class="text-white">Logout</button>
            <button v-else>
              <a href="/login" class="text-white h-8 mr-4">Login</a>
            </button>
            <div>
              <button @click="toggleCart" class="h-8 mr-4">
                Cart
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
    <div v-if="isOpen" class="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-30" @click="closeCart"></div>
    <div :class="{ 'right-0': isOpen, 'right-full': !isOpen }" class="fixed top-0 h-full w-1/3 bg-white shadow-lg transition-all duration-300 z-40">
      <div class="p-4">
        <UserCart />
      </div>
    </div>
  </div>
</template>




<script setup>
import { useFetch } from '@/composables/fetch.js';
import router from '@/router/routes.js';
import UserCart from '@/pages/UserCart.vue';
import { ref } from 'vue'

const token = ref(localStorage.getItem('token') || '');

const isOpen = ref(false);

const toggleCart = () => {
  isOpen.value = !isOpen.value;
};

const closeCart = () => {
  isOpen.value = false;
};
const handleLogout = async () => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token.value}`,
      },
    };
    await useFetch('http://127.0.0.1:8000/logout/', options);
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    router.push({ name: 'Login' });
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

</script>
