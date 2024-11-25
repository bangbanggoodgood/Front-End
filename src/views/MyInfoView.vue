<template>
  <div class="w-base mx-auto">
    <title-text>내 정보</title-text>
    <MyInfoTable :user-info="userInfo" />
    <button
      class="mt-4 bg-white text-red-500 border shadow-md px-4 py-1.5 rounded-full"
      @click="withdrawalClick"
    >
      회원탈퇴
    </button>
  </div>
</template>

<script setup lang="ts">
import MyInfoTable from '@/components/userinfo/UserInfoTable.vue'
import TitleText from '@/components/ui/typography/TitleText.vue'
import { onMounted, ref } from 'vue'
import type { TUserInfo } from '@/model'
import { jobs } from '@/lib/job'
import { userRole } from '@/lib/user'
import { getUser, withdrawal } from '@/service/axios/user'
import { logout } from '@/service/axios/auth'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const userInfo = ref<TUserInfo>({
  memberId: 0,
  useId: '',
  name: '',
  birth: '',
  sex: '',
  job: jobs[0],
  role: userRole.user,
})

onMounted(async () => {
  const data = await getUser()
  if (data) {
    userInfo.value = data
  }
})

const withdrawalClick = async () => {
  const res = await withdrawal()
  if (res) {
    alert('회원탈퇴가 완료되었습니다.')
    logout(userStore, '/')
  }
}
</script>
