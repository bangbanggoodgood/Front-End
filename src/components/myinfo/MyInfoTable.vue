<template>
  <table class="border w-full bg-white">
    <tbody class="divide-y">
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
      <tr class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-3 bg-background col-span-2">관심 키워드</td>
        <td class="flex items-center justify-between px-5 py-3 col-span-7">
          <div>{{ userInfo.categories.join(', ') }}</div>
          <Button class="border" @click="survey = true">수정하기</Button>
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

export interface MyInfoTableProps {
  userInfo: TUserInfo
}

defineProps<MyInfoTableProps>()

const survey = ref(false)
</script>
