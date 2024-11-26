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
      <user-info-table
        v-if="userInfo.useId !== ''"
        :user-info="userInfo"
        :is-my-info="false"
        @change-auth="changeAuthClick"
      />
      <button @click="closeModal">
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
import CloseIcon from '@/components/ui/icons/CloseIcon.vue'
import type { TUserInfo } from '@/model'
import { userRole } from '@/lib/user'
import { jobs } from '@/lib/job'
import { changeAuth, getUserList } from '@/service/axios/admin'

const modal = ref<boolean>(false)
const searchWord = ref<string>('')
const userInfo = ref<TUserInfo>({
  useId: '',
  name: '',
  birth: '',
  sex: '',
  job: jobs[0],
  memberId: -1,
  role: userRole.user,
})

const search = async () => {
  const res = await getUserList(searchWord.value)
  if (res) {
    userInfo.value = res
  }
}

const changeAuthClick = async () => {
  const res = await changeAuth(userInfo.value.useId)
  if (res) {
    alert('권한을 변경하였습니다.')
    search()
  }
}

const closeModal = () => {
  modal.value = false
  searchWord.value = ''
  userInfo.value = {
    useId: '',
    name: '',
    birth: '',
    sex: '',
    job: jobs[0],
    memberId: -1,
    role: userRole.user,
  }
}
</script>
