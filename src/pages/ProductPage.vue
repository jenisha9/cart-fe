<template>
    <div class="container mx-auto py-8">
      <h2 class="text-3xl font-semibold mb-4">Shop</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(item, index) in items" :key="index" class="bg-white rounded-lg p-4 shadow-md">
          <img :src="item.image" :alt="item.title" class="w-full h-32 object-cover mb-4">
          <h3 class="text-lg font-semibold mb-2">{{ item.name }}</h3>
          <p class="text-gray-700 mb-2">{{ item.description }}</p>
          <p class="text-gray-800 font-semibold mb-2">${{ item.price.toFixed(2) }}</p>
          <button @click="addToCart(index)" class="bg-pink-400 text-white font-semibold px-4 py-2 rounded hover:bg-pink-500 focus:outline-none focus:bg-blue-600">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>

  
<script setup>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';

  const items = ref([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/products/');
      items.value = response.data;
    } catch (error) {
      error.value = 'Error fetching data: ' + error.message;
    }
  };

  onMounted(fetchData);
</script> 

  
  