/* eslint-disable */

<template>
  <div>
    <h2>Shopping Cart</h2>
    <div v-if="cartItems.length === 0">
      <p>Your cart is empty</p>
    </div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id">
        <p>{{ item.product }}</p>
        <p>Price: {{ item.price }}</p>
        <button @click="removeFromCart(item.id)">Remove</button>
      </div>
      <button @click="clearCart">Clear Cart</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const cartItems = ref([]);

const fetchCart = async () => {
  const token = localStorage.getItem('token');
  console.log(token);

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
  };

  await axios.get('http://127.0.0.1:8000/cart/', { headers })
    .then(response => {
      cartItems.value = response.data;
      console.log(cartItems.value)
    })
    .catch(error => {
      console.error('Error fetching cart:', error);
    });
};


// const updateQuantity = (productId, quantity) => {
//   axios.post(`http://127.0.0.1:8000/cart/${productId}`, { quantity })
//     .then(() => { 
//       fetchCart();
//     })
//     .catch(error => {
//       console.error('Error updating quantity:', error);
//     });
// };

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


