<template>
  <div
    class="absolute flex flex-col divide-y rounded-lg bg-background shadow-lg w-72 h-[26rem] z-30"
  >
    <div class="py-2">
      <section ref="scrollArea" class="flex flex-col gap-2 h-[22rem] overflow-y-auto px-3">
        <chat-item v-for="chat in chats" :is-ai="chat.isAi" :message="chat.message" />
        <span v-show="isSending" class="text-xs text-text">AI 답변 생성중...</span>
      </section>
    </div>
    <section class="flex-grow flex justify-between items-center px-2">
      <form class="relative w-full max-w-sm items-center" @submit.prevent="sendChat">
        <Input
          class="bg-white text-xs text-black py-1.5 pr-9 h-fit"
          placeholder="AI에게 질문해주세요!"
          v-model="message"
        />
        <button class="absolute end-0 inset-y-0 flex items-center justify-center px-2">
          <send-icon />
        </button>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import SendIcon from '../ui/icons/SendIcon.vue'
import Input from '../ui/input/Input.vue'
import ChatItem from './ChatItem.vue'
import { onMounted, onUpdated, ref, type VNodeRef } from 'vue'
import type { TChat } from '@/model'
import { postAiChat } from '../service/axios/aiChat'

const scrollArea = ref<VNodeRef | null>(null)
const chats = ref<TChat[]>([])
const message = ref<string>('')
const isSending = ref<boolean>(false)

onMounted(() => {
  scrollArea.value.scrollTo({ top: scrollArea.value.scrollHeight })
})

onUpdated(() => {
  scrollArea.value.scrollTo({ top: scrollArea.value.scrollHeight })
})

const sendChat = async () => {
  if (isSending.value || message.value.trim().length === 0) {
    return
  }
  isSending.value = true
  chats.value.push({
    isAi: false,
    message: message.value.trim(),
  })
  message.value = ''
  const answer = await postAiChat(message.value.trim())
  isSending.value = false
  if (!answer) {
    alert('잠시 후 다시 시도해주세요.')
    return
  }
  chats.value.push(answer)
}
</script>
