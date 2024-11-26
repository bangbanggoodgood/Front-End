<template>
  <section class="flex flex-col gap-2">
    <div>
      <div class="flex justify-between items-center w-full">
        <Input class="text-right" v-model="targetMinPrice" placeholder="최소" />
        <span class="mx-4"> ~ </span>
        <Input class="text-right" v-model="targetMaxPrice" placeholder="최대" />
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
import { inject, type Ref } from 'vue'
import { Input } from '../ui/input'
import { Search } from 'lucide-vue-next'

const targetMinPrice = inject<Ref<string>>('targetMinPrice')
const targetMaxPrice = inject<Ref<string>>('targetMaxPrice')
const searchWord = inject<Ref<string>>('searchWord')
</script>
