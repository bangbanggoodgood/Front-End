<template>
  <div class="w-base mx-auto">
    <title-text>내 정보</title-text>
    <MyInfoTable :user-info="userMock" />
  </div>
</template>

<script setup lang="ts">
import MyInfoTable from '@/components/myinfo/MyInfoTable.vue'
import TitleText from '@/components/ui/typography/TitleText.vue'
import { userMock } from '@/mocks/data'
</script>
