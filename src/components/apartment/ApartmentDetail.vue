<template>
  <div class="flex flex-col gap-4 w-[28rem] p-5 bg-white shadow-xl border border-border">
    <div class="flex items-center gap-2">
      <h1 class="text-xl">{{ aptNm }}</h1>
      <button @click="toggleFavorite">
        <filled-heart-icon v-if="apartment.like" />
        <outlined-heart-icon v-else />
      </button>
    </div>
    <ai-comment :introduce="introduce" type="detail" />
    <apartment-info-table :apartment="apartment" />
    <div class="w-full h-80">
      <road-view />
    </div>
    <deal-chart :data="convertDealToChartItems(3, generateFiveYearsData())" />
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
import FilledHeartIcon from '../ui/icons/FilledHeartIcon.vue'
import OutlinedHeartIcon from '../ui/icons/OutlinedHeartIcon.vue'
import { ref } from 'vue'

export interface ApartmentDetailProps {
  apartment: TApartment
}
const props = defineProps<ApartmentDetailProps>()

const apartment = ref(props.apartment)
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
} = apartment.value

const toggleFavorite = () => {
  // TOOD: send like to server
  if (apartment.value.like) {
    alert('즐겨찾기를 해제했습니다.')
    apartment.value.like = 0
  } else {
    alert('즐겨찾기에 등록했습니다.')
    apartment.value.like = 1
  }
}
</script>
