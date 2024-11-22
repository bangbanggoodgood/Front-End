<template>
  <div
    v-if="type === 'preview'"
    class="w-80 p-2 text-sm text-center break-keep bg-white border border-border shadow-lg rounded-lg"
  >
    {{ introduce }}
  </div>
  <div v-else class="w-full px-3 py-2 text-sm bg-background rounded-lg">
    <p class="text-xs text-text">AI에 의해 생성됨</p>
    {{ introduce }}
  </div>
</template>

<script setup lang="ts">
import type { TApartment } from '@/model'

export interface AiCommentProps extends Pick<TApartment, 'introduce'> {
  type: 'preview' | 'detail'
}
defineProps<AiCommentProps>()
</script>
