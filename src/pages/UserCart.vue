/* eslint-disable */

<template>
  <div>
    <h2>Shopping Cart</h2>
    <div v-if="cartItems.length === 0">
      <p>Your cart is empty</p>
    </div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id">
        <p>{{ item.product.name }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Price: {{ item.product.price }}</p>
        <p>Total: {{ item.quantity * item.product.price }}</p>
        <button @click="updateQuantity(item.product.id, item.quantity - 1)">-</button>
        <button @click="updateQuantity(item.product.id, item.quantity + 1)">+</button>
        <button @click="removeFromCart(item.product.id)">Remove</button>
      </div>
      <p>Total Price: {{ totalPrice }}</p>
      <button @click="clearCart">Clear Cart</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const cartItems = ref([]);
const totalPrice = ref(0);

const fetchCart = () => {
  axios.get('http://127.0.0.1:8000/cart/')
    .then(response => {
      cartItems.value = response.data.items;
      totalPrice.value = response.data.total_price;
    })
    .catch(error => {
      console.error('Error fetching cart:', error);
    });
};

const updateQuantity = (productId, quantity) => {
  axios.post(`http://127.0.0.1:8000/cart/${productId}`, { quantity })
    .then(() => { 
      fetchCart();
    })
    .catch(error => {
      console.error('Error updating quantity:', error);
    });
};

const removeFromCart = (productId) => {
  axios.delete(`http://127.0.0.1:8000/cart/${productId}`)
    .then(() => {
      fetchCart();
    })
    .catch(error => {
      console.error('Error removing item from cart:', error);
    });
};

const clearCart = () => {
  axios.delete('http://127.0.0.1:8000/cart/')
    .then(() => {
      fetchCart();
    })
    .catch(error => {
      console.error('Error clearing cart:', error);
    });
};

onMounted(fetchCart);
</script>


