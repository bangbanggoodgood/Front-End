<template>
  <header-bar />
  <main class="flex-1 flex flex-col">
    <router-view />
  </main>
  <survey-container v-if="!didSurvey" @close="didSurvey = true" />
</template>
<script setup lang="ts">
import HeaderBar from '@/components/layout/Header.vue'
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import SurveyContainer from './components/survey/SurveyContainer.vue'

const didSurvey = ref(true)

onMounted(() => {
  // TODO: check if user already did survey
  // didSurvey.value = false
})
</script>
<style scoped>
@font-face {
  font-family: 'jua';

  src: url('@/assets/fonts/Jua.ttf') format('truetype');

  font-weight: 400;
}
</style>
