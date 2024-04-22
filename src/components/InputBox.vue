<template>
  <div>
    <label class="block mb-2 text-left text-gray-700 font-bold">{{ label }}</label>
    <input
      v-model="value"
      v-bind="$attrs"
      class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    />
    <div v-if="error && error.password" class="text-red-500">
      {{ error.password }}
    </div>
    <div v-if="error && error.email" class="text-red-500">
      {{ error.email }}
    </div>
  </div>
</template>         

<script setup>
import { defineProps, defineModel } from "vue";
const value = defineModel();

defineProps({
  label: {
    type: String,
    default: "",
  },
  error: {
    type: Object,
    default: () => {},
  },
  field: {
    type: String,
    default: "",
  },
});
</script>