<template>
  <section class="flex flex-col gap-2">
    <div>
      <div class="flex justify-between items-center w-full">
        <Input class="text-right" :model-value="min" placeholder="최소" />
        <span class="mx-4"> ~ </span>
        <Input class="text-right" :model-value="max" placeholder="최대" />
      </div>
      <p class="text-right text-xs text-text mt-1">(단위: 만 원)</p>
    </div>
    <div class="relative w-full max-w-sm items-center">
      <Input
        id="search"
        type="text"
        placeholder="아파트명 검색"
        class="pl-10"
        v-model="searchWord"
      />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <Search class="size-6 text-primary" />
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '../ui/input'
import { Search } from 'lucide-vue-next'

const min = ref(null)
const max = ref(null)
const searchWord = ref('')
</script>
