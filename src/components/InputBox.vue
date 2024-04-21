<template>
    <input :type="type" v-model="inputValue" :class="inputClass" @input="updateValue">
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    inputClass: {
      type: String,
      default: 'w-full px-3 py-2 border  border-gray-300 rounded focus:outline-none focus:border-blue-500' 
    }
  });
  
  const emit = defineEmits(['input']);
  
  const inputValue = ref(props.value);
  
  const updateValue = (event) => {
    inputValue.value = event.target.value;
    emit('input', inputValue.value);
  };
  </script>
  