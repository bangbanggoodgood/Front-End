<template>
  <div class="flex flex-col items-center bg-white px-10 pt-8 pb-4 rounded-lg shadow-md">
    <h2 class="text-xl mb-4">{{ info.title }}</h2>
    <ul class="list-disc text-gray-800">
      <li v-for="item in info.infos" class="text-sm leading-6">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { TDidimdolDescriptionInfo } from '@/model'

export interface InfoCardProps {
  info: TDidimdolDescriptionInfo
}

defineProps<InfoCardProps>()
</script>
