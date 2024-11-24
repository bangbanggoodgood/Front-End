<template>
  <table class="border w-full bg-white">
    <tbody class="divide-y">
      <tr class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-3 bg-background col-span-2">이름</td>
        <td class="flex items-center px-5 py-3 col-span-7">{{ userInfo.useId }}</td>
      </tr>
      <tr class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-3 bg-background col-span-2">이름</td>
        <td class="flex items-center px-5 py-3 col-span-7">{{ userInfo.name }}</td>
      </tr>
      <tr class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-3 bg-background col-span-2">생년월일</td>
        <td class="flex items-center px-5 py-3 col-span-7">{{ userInfo.birth }}</td>
      </tr>
      <tr class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-3 bg-background col-span-2">성별</td>
        <td class="flex items-center px-5 py-3 col-span-7">{{ userInfo.sex }}</td>
      </tr>
      <tr class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-3 bg-background col-span-2">직업</td>
        <td class="flex items-center px-5 py-3 col-span-7">{{ userInfo.job }}</td>
      </tr>
      <tr v-if="isMyInfo" class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-3 bg-background col-span-2">관심 키워드</td>
        <td class="flex items-center justify-between px-5 py-3 col-span-7">
          <div>{{ userInfo.categories.join(', ') }}</div>
          <Button class="border" @click="survey = true">수정하기</Button>
        </td>
      </tr>
      <tr v-else class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-3 bg-background col-span-2">역할</td>
        <td class="flex items-center justify-between px-5 py-3 col-span-7">
          <div>{{ userRoleToKr[userInfo.role] }}</div>
          <Button
            class="py-1"
            :variant="userInfo.role === userRole.admin ? 'default' : 'filled'"
            @click="changeAUth"
            >권한
            {{ userInfo.role === userRole.admin ? '관리자 권한 해제' : '관리자 권한 부여' }}</Button
          >
        </td>
      </tr>
    </tbody>
  </table>
  <survey-container v-if="survey" @close="survey = false" :is-edit="true" />
</template>

<script setup lang="ts">
import type { TUserInfo } from '@/model'
import Button from '../ui/button/Button.vue'
import { ref } from 'vue'
import SurveyContainer from '@/components/survey/SurveyContainer.vue'
import { userRole, userRoleToKr } from '@/lib/user'

export interface MyInfoTableProps {
  userInfo: TUserInfo
  isMyInfo?: boolean
}

const props = withDefaults(defineProps<MyInfoTableProps>(), {
  isMyInfo: true,
})

const survey = ref(false)

const changeAUth = () => {
  if (props.userInfo.role === userRole.admin) {
    alert('관리자 권한을 해제하시겠습니까?')
  } else {
    alert('관리자 권한을 부여하시겠습니까?')
  }
}
</script>
