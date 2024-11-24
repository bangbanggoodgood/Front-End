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
import { RouterView, useRoute } from 'vue-router'
import SurveyContainer from './components/survey/SurveyContainer.vue'
import { sessionStorage } from './util/browserStorage'

const didSurvey = ref(true)

const route = useRoute()

onMounted(() => {
  // TODO: check if user already did survey
  // didSurvey.value = false
  const token = sessionStorage.getItem('access_token')
  if (token) {
    alert('로그인 api 요청')
  } else {
    if (route.query.accessToken) {
      sessionStorage.setItem('access_token', route.query.accessToken)
    }
  }
})
</script>
<style scoped>
@font-face {
  font-family: 'jua';

  src: url('@/assets/fonts/Jua.ttf') format('truetype');

  font-weight: 400;
}
</style>
