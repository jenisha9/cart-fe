<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h2 class="text-2xl font-semibold mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold mb-2">Email:</label>
          <input type="email" id="email" v-model="email" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-semibold mb-2">Password:</label>
          <input type="password" id="password" v-model="password" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log('Login clicked');
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // Your login logic here
    }
  }
};
</script>

<style>
/* Additional styles specific to this component can be added here */
</style>
