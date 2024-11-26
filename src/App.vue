<template>
  <header-bar />
  <main v-if="showMain" class="flex-1 flex flex-col">
    <router-view />
  </main>
</template>
<script setup lang="ts">
import HeaderBar from '@/components/layout/Header.vue'
import { onMounted, ref, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import { sessionStorage } from './util/browserStorage'
import { insertToken } from './service/axios/auth'
import { useUserStore } from './stores/user'

const showMain = ref(false)

const route = useRoute()
const router = useRouter()

const userStore = useUserStore()

onMounted(() => {
  const token = sessionStorage.getItem('access_token')
  if (token) {
    insertToken(token.value, userStore)
    showMain.value = true
    router.replace({ query: {} })
  } else {
    if (route.query.accessToken) {
      sessionStorage.setItem('access_token', route.query.accessToken)
      router.replace({ query: {} })
    }
    window.location.href = import.meta.env.VITE_APP_KAKAO_AUTH_URL
    showMain.value = true
  }
})

watch(
  () => route.query,
  (nv) => {
    const token = sessionStorage.getItem('access_token')
    if (token) {
      insertToken(token.value, userStore)
      showMain.value = true
    } else {
      if (nv.accessToken) {
        sessionStorage.setItem('access_token', nv.accessToken)
        router.replace({ query: {} })
      }
      showMain.value = true
    }
  },
  { immediate: true },
)
</script>
<style scoped>
@font-face {
  font-family: 'jua';

  src: url('@/assets/fonts/Jua.ttf') format('truetype');

  font-weight: 400;
}
</style>
