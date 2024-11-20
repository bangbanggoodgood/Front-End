<template>
  <div class="flex flex-col w-[28rem] p-5 bg-white shadow-xl border border-border">
    <div class="flex items-center gap-2">
      <h1 class="text-xl">{{ aptNm }}</h1>
      <button @click="toggleFavorite">
        <filled-heart-icon v-if="apartment.like" />
        <outlined-heart-icon v-else />
      </button>
    </div>
    <ai-comment :introduce="introduce" type="detail" />
    <h2 class="text-lg mt-3">기본정보</h2>
    <apartment-info-table :apartment="apartment" />
    <h2 class="text-lg mt-3">로드뷰</h2>
    <div class="w-full h-80">
      <road-view />
    </div>
    <h2 class="text-lg mt-3">평균 거래가</h2>
    <div class="flex border divide-x text-sm">
      <button class="flex-1" :class="{ 'bg-background': duration === 1 }" @click="duration = 1">
        1년
      </button>
      <button class="flex-1" :class="{ 'bg-background': duration === 3 }" @click="duration = 3">
        3년
      </button>
      <button class="flex-1" :class="{ 'bg-background': duration === 5 }" @click="duration = 5">
        5년
      </button>
    </div>
    <deal-chart :data="chartData" />
    <h2 class="text-lg mt-3">거래 내역</h2>
    <deal-table :deals="dealData" />
    <offset-pagination
      class="mt-2"
      :totalItem="dealData.length"
      :curPage="curDealPage"
      @handleCurPage="handleCurDealPage"
    />
  </div>
</template>

<script setup lang="ts">
import type { TApartment } from '@/model'
import AiComment from './AiComment.vue'
import ApartmentInfoTable from './ApartmentInfoTable.vue'
import RoadView from '../map/RoadView.vue'
import DealChart from '../chart/DealChart.vue'
import { generateFiveYearsData, generateDealData } from '@/mocks/data'
import { convertDealToChartItems } from '@/util/apartment'
import FilledHeartIcon from '../ui/icons/FilledHeartIcon.vue'
import OutlinedHeartIcon from '../ui/icons/OutlinedHeartIcon.vue'
import { computed, ref } from 'vue'
import DealTable from './DealTable.vue'
import OffsetPagination from '@/components/ui/pagination/OffsetPagination.vue'

export interface ApartmentDetailProps {
  apartment: TApartment
}
const props = defineProps<ApartmentDetailProps>()

const apartment = ref(props.apartment)
const { aptNm, introduce } = apartment.value

const duration = ref(1)
const dealData = generateDealData()
const curDealPage = ref(1)

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

const chartData = computed(() => convertDealToChartItems(duration.value, generateFiveYearsData()))

const handleCurDealPage = (page: number) => {
  curDealPage.value = page
}
</script>
