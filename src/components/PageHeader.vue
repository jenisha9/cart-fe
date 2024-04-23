<template>
  <header class="bg-pink-500 text-white py-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl hover:bg-pink-600 focus:bg-pink-600"></h1>
      <nav>
        <ul class="flex">
          <li class="mr-4"><a href="/products" class="hover:text-red-500">Home</a></li>
          <li v-if="!token" class="mr-4">
            <a href="/register" class="hover:text-red-500">Register</a>
          </li>
          <li class="mr-4"><a href="/cart" class="hover:text-red-500">Cart</a></li>
          <button v-if="token" @click="handleLogout" class="text-white">Logout</button>
          <button v-else>
            <a href="/login" class="text-white">Login</a>
          </button>
        </ul>
      </nav>
    </div>
  </header>
</template>


<script setup>
import { useFetch } from '@/composables/fetch.js';
import router from '@/router/routes.js';
import { ref, watch } from 'vue'

const token = ref(localStorage.getItem('token') || '');

watch(() => localStorage.getItem('token'), (newToken) => {
  token.value = newToken || '';
});

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
