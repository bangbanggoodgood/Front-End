<template>
  <div
    class="relative border border-border rounded-xl bg-white hover:bg-slate-100"
    @mouseover="aiComment = true"
    @mouseleave="aiComment = false"
  >
    <div class="flex flex-col gap-3 cursor-pointer px-4 py-3">
      <div>
        <h3 class="text-lg">{{ apartment.aptNm }}</h3>
        <div class="text-text text-xs">
          {{ apartment.buildYear }} / {{ apartment.minArea }}m² ~ {{ apartment.maxArea }}m²
        </div>
      </div>
      <div>
        주소: {{ apartment.address }}
        <br />
        매매가: {{ numberToKrMoney(apartment.minDealAmount) }} ~
        {{ numberToKrMoney(apartment.maxDealAmount) }} 원
      </div>
      <ul class="flex flex-wrap gap-2">
        <li v-for="tag in apartment.hashtags" :key="tag">
          <keyword-box :keyword="tag" />
        </li>
      </ul>
    </div>
    <Transition>
      <aside
        v-if="introduce"
        v-show="aiComment"
        class="absolute -right-1 top-0 translate-x-full overflow-visible z-20"
      >
        <ai-comment :introduce="introduce" type="preview" />
      </aside>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { TApartment } from '@/model'
import { numberToKrMoney } from '@/util/money'
import AiComment from '../ai/AiComment.vue'
import { ref } from 'vue'
import KeywordBox from '../ui/KeywordBox.vue'

interface Props {
  apartment: TApartment
  introduce?: string
}

defineProps<Props>()

const aiComment = ref(false)
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
