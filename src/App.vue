<template>
  <Header />
  <main class="flex-1 flex flex-col">
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import Header from '@/components/layout/HeaderItem.vue'
import { RouterView } from 'vue-router'
</script>
<style scoped>
@font-face {
  font-family: 'jua';

  src: url('@/assets/fonts/Jua.ttf') format('truetype');

  font-weight: 400;
}
</style>
