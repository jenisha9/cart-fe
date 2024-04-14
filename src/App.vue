<template>
  <PageHeader/>
  <RouterView/>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue';
import { RouterView } from 'vue-router';
</script>