<template>
  <div>
    <label class="block mb-2 text-left text-gray-700 font-bold">{{
      label
    }}</label>
    <input
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
  v-bind="$attrs"
  class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
/>
  </div>
</template>

<script setup>
import defineProps from "vue";

defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});
</script>