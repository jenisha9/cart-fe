<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h2 class="text-2xl font-semibold mb-4">Register</h2>
      <form @submit.prevent="redirectToLogin" method="post">
        <div class="mb-4">
          <InputBox label="Name" v-model="name" type="text" />
        </div>
        <div class="mb-4">
          <InputBox label="Email" v-model="email" type="email" />
        </div>
        <div class="mb-6">
          <InputBox label="Password" v-model="password" type="password" />
        </div>
        <button
          type="submit"
          class="w-full bg-pink-500 text-white font-semibold px-4 py-2 rounded hover:bg-pink-600 focus:outline-none focus:bg-pink-600">
          Register
        </button>
      </form>
    </div>
  </div>
</template>
  
  <script setup>
import { RegisterForm } from "@/composables/RegisterForm.js";
import InputBox from "@/components/InputBox.vue";
import router from "@/router/routes.js";

const { name, email, password, submitForm } = RegisterForm();
const redirectToLogin = async () => {
  const { data, error } = await submitForm();
  if (!error.value) {
    console.log("Final Data", data.value);
    router.push({ name: "Login" });
  } else {
    console.log("Final  error", error.value);
  }
};
</script>

  