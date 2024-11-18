<template>
  <header class="flex justify-between items-center py-5 px-8 bg-primary shadow-lg text-white">
    <RouterLink class="text-4xl" :to="{ name: 'home' }">LOGO</RouterLink>
    <div class="text-xl text-white flex gap-4">
      <template v-if="user.name">
        <RouterLink :to="{ name: 'myinfo' }">내 정보</RouterLink>
        <RouterLink @click="logout" :to="{ name: 'home' }">로그아웃</RouterLink>
      </template>
      <template v-else>
        <RouterLink @click="login" :to="{ name: 'signin' }">로그인</RouterLink>
      </template>
    </div>
  </header>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const login = () => {
  alert('login')
  user.login({ name: 'test' })
}

const logout = () => {
  alert('hi')
  user.logout()
}
</script>
