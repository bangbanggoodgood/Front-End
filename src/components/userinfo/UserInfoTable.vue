<template>
  <table class="border w-full bg-white">
    <tbody class="divide-y">
      <tr class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-3 bg-background col-span-2">아이디</td>
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
        <td class="flex items-center px-5 py-3 col-span-7">{{ sexToKrMapper[userInfo.sex] }}</td>
      </tr>
      <tr class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-3 bg-background col-span-2">직업</td>
        <td class="flex items-center px-5 py-3 col-span-7">{{ userInfo.job }}</td>
      </tr>
      <tr v-if="!isMyInfo" class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-3 bg-background col-span-2">역할</td>
        <td class="flex items-center justify-between px-5 py-3 col-span-7">
          <div>{{ userRoleToKr[userInfo.role] }}</div>
          <Button
            class="py-1"
            :variant="userInfo.role === userRole.admin ? 'default' : 'filled'"
            @click="changeAUth"
          >
            {{ userInfo.role === userRole.admin ? '관리자 권한 해제' : '관리자 권한 부여' }}</Button
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { TUserInfo } from '@/model'
import Button from '../ui/button/Button.vue'
import { userRole, userRoleToKr } from '@/lib/user'
import { sexToKrMapper } from '@/lib/stat'

export interface MyInfoTableProps {
  userInfo: TUserInfo
  isMyInfo?: boolean
}

const props = withDefaults(defineProps<MyInfoTableProps>(), {
  isMyInfo: true,
})

const emit = defineEmits<{
  (e: 'changeAuth', useId: string): void
}>()

const changeAUth = () => {
  if (
    confirm(
      props.userInfo.role === userRole.admin
        ? '관리자 권한을 해제하시겠습니까?'
        : '관리자 권한을 부여하시겠습니까?',
    )
  ) {
    emit('changeAuth', props.userInfo.useId)
  }
}
</script>
