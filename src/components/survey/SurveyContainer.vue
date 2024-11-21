<template>
  <div class="absolute w-full h-full bg-black/30 z-[100]">
    <div
      class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 w-[31rem] bg-white p-12 rounded-xl"
    >
      <h1 class="text-2xl text-center break-keep">
        집을 고를 때 중요하게 생각하는 키워드를 1~5개 골라주세요.
      </h1>
      <ul class="flex flex-wrap justify-center gap-3">
        <li
          v-for="keyword in keywords"
          class="border border-primary rounded-full py-1 px-5 text-primary cursor-pointer"
          :class="{ 'bg-slate-200': selectedKeywords.includes(keyword) }"
          @click="toggleKeyword(keyword)"
        >
          {{ keyword }}
        </li>
      </ul>
      <Button variant="filled" class="w-full" @click="submit">완료</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { keywords } from '@/lib/infra'
import { ref } from 'vue'
import Button from '../ui/button/Button.vue'

const emit = defineEmits(['close'])

const selectedKeywords = ref<string[]>([])

const toggleKeyword = (keyword: string) => {
  if (selectedKeywords.value.includes(keyword)) {
    selectedKeywords.value = selectedKeywords.value.filter(
      (selectedKeyword) => selectedKeyword !== keyword,
    )
  } else {
    if (selectedKeywords.value.length >= 5) {
      return
    }
    selectedKeywords.value.push(keyword)
  }
}

const submit = () => {
  if (selectedKeywords.value.length === 0) {
    alert('키워드를 한 개 이상 선택해주세요.')
    return
  }
  emit('close')
}
</script>
