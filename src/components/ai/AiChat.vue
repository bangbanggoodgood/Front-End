<template>
  <div
    class="absolute flex flex-col divide-y rounded-lg bg-background shadow-lg w-72 h-[26rem] z-30"
  >
    <div class="py-2">
      <section ref="scrollArea" class="flex flex-col gap-2 h-[22rem] overflow-y-auto px-3">
        <chat-item v-for="chat in chats" :is-ai="chat.isAi" :message="chat.message" />
      </section>
    </div>
    <section class="flex-grow flex justify-between items-center px-2">
      <form class="relative w-full max-w-sm items-center" @submit.prevent="sendChat">
        <Input
          class="bg-white text-xs text-black py-1.5 pr-9 h-fit"
          placeholder="AI에게 질문해주세요!"
        />
        <button class="absolute end-0 inset-y-0 flex items-center justify-center px-2">
          <send-icon />
        </button>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { chatsMock } from '@/mocks/data'
import SendIcon from '../ui/icons/SendIcon.vue'
import Input from '../ui/input/Input.vue'
import ChatItem from './ChatItem.vue'
import { onMounted, onUpdated, ref, type VNodeRef } from 'vue'
import type { TChat } from '@/model'

const scrollArea = ref<VNodeRef | null>(null)
const chats = ref<TChat[]>([])

onMounted(() => {
  scrollArea.value.scrollTo({ top: scrollArea.value.scrollHeight })
})

onUpdated(() => {
  scrollArea.value.scrollTo({ top: scrollArea.value.scrollHeight })
})

let i = 0
const sendChat = () => {
  chats.value.push(chatsMock[i++])
}
</script>
