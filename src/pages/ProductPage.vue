<template>
    <div class="container mx-auto py-8">
      <h2 class="text-3xl font-semibold mb-4">Shop</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(item, index) in items" :key="index" class="bg-white rounded-lg p-4 shadow-md">
          <p class="text-gray-700 mb-2">{{ item.title.length > 50? item.title.slice(0, 50) + '...' : item.title }}</p>
          <img :src="item.image" :alt="item.title" class="w-full h-64 object-cover mb-4">
          <p class="text-gray-700 mb-2">{{ item.description.length > 50? item.description.slice(0, 50) + '...' : item.description }}</p>
          <p class="text-gray-800 font-semibold mb-2">${{ item.price.toFixed(2) }}</p>
          <button @click="addToCart(index)" class="bg-pink-400 text-white font-semibold px-4 py-2 rounded hover:bg-pink-500 focus:outline-none focus:bg-pink-600">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>

  
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const items = ref([]);
const cart = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/products/');
    items.value = response.data;
  } catch (error) {
    error.value = 'Error fetching data: ' + error.message;
  }
};

const addToCart = (index) => {
  const selectedItem = items.value[index];
  const existingItem = cart.value.find(item => item.id === selectedItem.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.value.push({ ...selectedItem, quantity: 1 });
  }
};

onMounted(fetchData);
</script>
