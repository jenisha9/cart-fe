<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-4">Register</h2>
        <form @submit.prevent="redirectToLogin" method="post">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-semibold mb-2">Name:</label>
            <input type="text" id="name" v-model="name" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-semibold mb-2">Email:</label>
            <input type="email" id="email" v-model="email" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 font-semibold mb-2">Password:</label>
            <input type="password" id="password" v-model="password" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
          </div>
          <button type="submit" class="w-full bg-pink-500 text-white font-semibold px-4 py-2 rounded hover:bg-pink-600 focus:outline-none focus:bg-pink-600">Register</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { RegisterForm } from '@/composables/RegisterForm.js';
  import router from '@/router/routes.js';
  const { name, email, password, submitForm} = RegisterForm();
  const redirectToLogin = async () => {
      const {data, error} = await submitForm();
      if (!error.value) {
          console.log('Final Data', data.value);
          router.push({ name: 'Login' });
      } else {
          console.log('Final  error', error.value);
      }
  }
  </script>

  