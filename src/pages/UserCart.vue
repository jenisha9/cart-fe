<template>
  <div class="container ml-auto py-6">
    <div v-if="cart_items===0" class="text-center">Cart is Null</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
      <ul >
      <li v-for ="(item,index) in cart_items" :key="index">
      <div  class="bg-custom-light rounded-lg p-4 shadow-md"> 
        <img :src="item.product.image" :alt="item.product.title" class="w-16 h-16 object-cover mb-4">
        <h3 class="text-mg font-semibold mb-2 h-18">{{ item.product.title }}</h3>
        <p class="text-gray-800 font-semibold mb-2">${{ item.product.price }}</p>
        <button class="bg-pink-300 text-white py-2 px-4 rounded-md cursor-pointer transition-colors 
                               duration-300 hover:custom-brown" @click="increment(product,index)"> + </button>  
          <span class="p-3"> {{item.product.quantity }}</span>
          <button class="bg-pink-300 text-white py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:custom-brown" @click="decrement()">-</button>
          <button class="bg-pink-300 text-white py-2 px-4 rounded-md cursor-pointer" @click="removeFromCart(index,product)"> Remove </button>  
        </div>
      </li>
        </ul>
        <p class="bg-pink-300 text-black py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:custom-brown">Total:${{ total }}</p>
    </div>
</div>  

</template>
<script setup>
import {computed} from 'vue';
import { useCart, get_all_cart } from "@/composables/UseCart"
const cartStore = useCart();

const cart = useCart()
const items = cart.items;
const {cart_items,error}= get_all_cart();
console.log(error)
const quantity = cart.quantity

const removeFromCart = (index, product) => {     
  console.log(product)
   cartStore.removeFromCart(index, cart_items.value[index]); 
 }

const total = computed(() => {  
  let totalPrice = 0; 
  for (let i = 0; i < items; i++) {
    totalPrice += Number(items[i].price)*quantity[items[i].id];
  }
  return totalPrice;
})
</script>