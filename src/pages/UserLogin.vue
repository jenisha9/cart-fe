<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h2 class="text-pink-500 text-2xl font-semibold mb-4">Login</h2>
      <form @submit.prevent="submitForm" method="post">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold mb-2">Email:</label>
          <input type="email" id="email" v-model="email" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-semibold mb-2">Password:</label>
          <input type="password" id="password" v-model="password" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
        </div>
        <button type="submit" class="w-full bg-pink-500 text-white font-semibold px-4 py-2 rounded hover:bg-pink-600 focus:outline-none focus:bg-pink-600">Login</button>
      </form>
      <div class="mt-4 text-center">
        <a href='/user/register' class="text-pink-500 hover:text-pink-700 font-semibold">Create an Account</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LoginForm } from '@/composables/LoginForm.js';
const { email, password, submitForm} = LoginForm();

</script>
  
  