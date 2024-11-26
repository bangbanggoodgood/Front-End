<template>
  <div class="flex flex-col" :class="{ 'self-end': !isAi }">
    <span class="text-[0.7rem] text-text" :class="{ 'self-end': !isAi }">{{
      isAi ? 'AI' : '나'
    }}</span>
    <div
      class="text-xs px-2 py-1 shadow-md w-fit"
      :class="[
        { 'bg-white text-black rounded-l-md rounded-tr-md': !isAi },
        { 'bg-primary text-white rounded-r-md rounded-tl-md': isAi },
      ]"
    >
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
export interface ChatItemProps {
  isAi: boolean
  message: string
}
defineProps<ChatItemProps>()
</script>
