<template>
  <Header />
  <RouterView />
</template>
<script setup>
import Header from '@/components/layout/Header.vue'
import { RouterView } from 'vue-router'
</script>
