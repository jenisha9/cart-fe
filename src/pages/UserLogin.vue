<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h2 class="text-pink-500 text-2xl font-semibold mb-4">Login</h2>
      <form @submit.prevent="submitForm" method="post">
        <div class="mb-4">
          <InputBox label="Email" v-model="email" type="email" />
        </div>
        <div class="mb-6">
          <InputBox label="Password" v-model="password" type="password" />
        </div>
        <button type="submit"
          class="w-full bg-pink-500 text-white font-semibold px-4 py-2 rounded hover:bg-pink-600 focus:outline-none focus:bg-pink-600">
          Login
        </button>
      </form>
      {{ error }}
      <div class="mt-4 text-center">
        <a href="/register" class="text-pink-500 hover:text-pink-700 font-semibold">Create an Account</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LoginForm } from "@/composables/LoginForm.js";
import router from "@/router/routes.js";
import { watch } from "vue";
import InputBox from "@/components/InputBox.vue";
// import ErrorWarning from "@/components/ErroWarning.vue";

const { email, password, submitForm, data, error } = LoginForm();
watch(data, () => {
  console.log(data);
  if (data && data.value) {
    router.push({ name: "Products" });
  }
});
</script>
