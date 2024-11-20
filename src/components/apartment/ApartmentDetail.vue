<template>
  <div class="flex flex-col gap-4 w-[28rem] p-5 bg-white rounded-xl shadow-xl border border-border">
    <div class="flex items-center">
      <h1 class="text-xl">{{ aptNm }}</h1>
    </div>
    <ai-comment :introduce="introduce" type="detail" />
    <apartment-info-table :apartment="apartment" />
    <div class="w-full h-80">
      <road-view />
    </div>
    <deal-chart :data="convertDealToChartItems(generateFiveYearsData())" />
  </div>
</template>

<script setup lang="ts">
import type { TApartment } from '@/model'
import AiComment from './AiComment.vue'
import ApartmentInfoTable from './ApartmentInfoTable.vue'
import RoadView from '../map/RoadView.vue'
import DealChart from '../chart/DealChart.vue'
import { generateFiveYearsData } from '@/mocks/data'
import { convertDealToChartItems } from '@/util/apartment'

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
