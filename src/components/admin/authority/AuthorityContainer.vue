<template>
  <title-text>사용자 권한 설정</title-text>
  <Button @click="modal = true">관리자 권한 부여/해제</Button>
  <div v-if="modal" class="fixed top-0 left-0 w-full h-full bg-black/30 z-[100]">
    <div
      class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-2 w-[31rem] bg-white p-10 rounded-xl"
    >
      <h2 class="text-lg">사용자 검색</h2>
      <form class="relative w-full items-center" @submit.prevent="search">
        <Input
          id="search"
          type="text"
          placeholder="아이디 입력"
          class="pl-10"
          v-model="searchWord"
        />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search class="size-6 text-primary" />
        </span>
      </form>
      <user-info-table :user-info="userMock" :is-my-info="false" />
      <button @click="modal = false">
        <close-icon class="absolute right-4 top-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleText from '@/components/ui/typography/TitleText.vue'
import Button from '@/components/ui/button/Button.vue'
import { ref } from 'vue'
import Input from '@/components/ui/input/Input.vue'
import { Search } from 'lucide-vue-next'
import UserInfoTable from '@/components/userinfo/UserInfoTable.vue'
import { userMock } from '@/mocks/data'
import CloseIcon from '@/components/ui/icons/CloseIcon.vue'

const modal = ref<boolean>(false)
const searchWord = ref<string>('')

const search = () => {
  alert('hi')
}
</script>
