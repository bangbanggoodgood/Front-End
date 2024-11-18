<template>
  <Header />
  <main class="bg-yellow-200 flex-1">
    <RouterView />
  </main>
</template>
<script setup>
import Header from '@/components/layout/Header.vue'
import { RouterView } from 'vue-router'
</script>
<style scoped>
@font-face {
  font-family: 'jua';

  src: url('@/assets/fonts/Jua.ttf') format('truetype');

  font-weight: 400;
}
</style>
