<template>
  <div
    class="flex flex-col gap-4 w-[28rem] h-full p-5 bg-white rounded-xl shadow-xl border border-border overflow-y-auto scrollbar-hide"
  >
    <div class="flex items-center">
      <h1 class="text-xl">{{ aptNm }}</h1>
    </div>
    <ai-comment :introduce="introduce" type="detail" />
    <apartment-info-table :apartment="apartment" />
    <div class="w-full h-96">
      <road-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TApartment } from '@/model'
import AiComment from './AiComment.vue'
import ApartmentInfoTable from './ApartmentInfoTable.vue'
import RoadView from '../map/RoadView.vue'

export interface ApartmentDetailProps {
  apartment: TApartment
}
const props = defineProps<ApartmentDetailProps>()

const {
  aptNm,
  buildYear,
  minArea,
  maxArea,
  address,
  infra,
  minDealAmount,
  maxDealAmount,
  introduce,
  like,
} = props.apartment
</script>
