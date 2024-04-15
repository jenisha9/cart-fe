<template>
  <div class="bg-pink-100">
  <PageHeader/>
  <RouterView/>
  </div>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue';
import { RouterView } from 'vue-router';
</script>