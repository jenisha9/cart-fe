<template>
  <div>
    <label class="block mb-2 text-left text-gray-700 font-bold">{{
      label
    }}</label>
    <input
      v-model="value"
      v-bind="$attrs"
      class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    />
    <div v-if="isErrorFor(field)" class="text-red-500">
      {{ props.error[field] }}
    </div>
  </div>
</template>
        
<script setup>
import { defineProps, defineModel } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  error: {
    type: Object,
    default: () => ({}),
  },
  field: {
    type: String,
    default: "",
  },
});

const value = defineModel();

const isErrorFor = (field) => {
  return props.error && props.error[field];
};
</script>

