<template>
  <header class="flex justify-between items-center py-4 px-8 bg-primary shadow-lg text-white z-50">
    <router-link class="text-4xl" :to="{ name: 'home' }">LOGO</router-link>
    <div class="text-lg text-white flex items-center gap-4">
      <template v-if="user.name">
        <router-link v-if="user.role === userRole.admin" :to="{ name: 'admin' }"
          >관리자 페이지</router-link
        >
        <router-link :to="{ name: 'favorite' }">즐겨찾기</router-link>
        <router-link :to="{ name: 'didimdol' }">디딤돌 금리</router-link>
        <div class="flex items-center relative cursor-pointer" ref="dropdownRef">
          <button @click="toggleDropdown">
            <user-icon />
          </button>
          <drop-down-list
            v-show="dropdown"
            class="left-auto top-8 right-0 text-black text-[0.9rem] w-max rounded-md"
            :list="['내 정보', '로그아웃']"
            @on-click="dropdownClick"
          />
        </div>
      </template>
      <template v-else>
        <a @click="login">로그인</a>
      </template>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import UserIcon from '../ui/icons/UserIcon.vue'
import DropDownList from '../ui/DropDownList.vue'
import router from '@/router'
import { onBeforeUnmount, onMounted, onUpdated, ref } from 'vue'
import { userRole } from '@/lib/user'

const user = useUserStore()

const dropdown = ref(false)
const dropdownRef = ref<any>(null)

const handleOutsideClick = (event: MouseEvent) => {
  const element = dropdownRef.value
  if (element && element.contains) {
    if (!element.contains(event.target as Node)) {
      dropdown.value = false
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onUpdated(() => {
  console.log(user.role)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
})

const login = () => {
  alert('login')
  user.login({ memberId: 1, name: 'junhakjh', role: userRole.admin })
}

const toggleDropdown = () => {
  dropdown.value = !dropdown.value
}

const dropdownClick = (value: string) => {
  if (value === '내 정보') {
    router.push({ name: 'myinfo' })
  } else {
    logout()
  }
  toggleDropdown()
}

const logout = () => {
  alert('hi')
  user.logout()
}
</script>
