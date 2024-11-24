<template>
  <div class="w-base mx-auto">
    <title-text>내 정보</title-text>
    <MyInfoTable :user-info="userInfo" />
  </div>
</template>

<script setup lang="ts">
import MyInfoTable from '@/components/userinfo/UserInfoTable.vue'
import TitleText from '@/components/ui/typography/TitleText.vue'
import { onMounted, onUpdated, ref } from 'vue'
import type { TUserInfo } from '@/model'
import { jobs } from '@/lib/job'
import { userRole } from '@/lib/user'
import { getUser } from '@/service/axios/user'

const userInfo = ref<TUserInfo>({
  memberId: 0,
  useId: '',
  name: '',
  birth: '',
  sex: '',
  job: jobs[0],
  role: userRole.user,
  categories: [],
})

onMounted(async () => {
  const data = await getUser()
  if (data) {
    userInfo.value = data
  }
})
onUpdated(async () => {
  const data = await getUser()
  if (data) {
    userInfo.value = data
  }
})
</script>
