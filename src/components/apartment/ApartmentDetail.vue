<template>
  <div class="relative flex flex-col w-[28rem] p-5 bg-white shadow-xl border border-border">
    <button @click="$emit('closeDetail')" class="absolute top-2 right-2">
      <close-icon />
    </button>
    <div class="flex items-center gap-2">
      <h1 class="text-xl">{{ apartment.aptNm }}</h1>
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
    <deal-chart :data="computedGraphData" />
    <h2 class="text-lg mt-3">거래 내역</h2>
    <deal-table :deals="dealData" />
    <offset-pagination
      class="mt-2"
      :totalItem="dealTotal"
      :curPage="curDealPage"
      :itemsPerPage="20"
      @handleCurPage="handleCurDealPage"
    />
  </div>
</template>

<script setup lang="ts">
import type { TDeal, TApartment } from '@/model'
import AiComment from '../ai/AiComment.vue'
import ApartmentInfoTable from './ApartmentInfoTable.vue'
import RoadView from '../map/RoadView.vue'
import DealChart from '../chart/DealChart.vue'
import { convertDealToChartItems } from '@/util/apartment'
import FilledHeartIcon from '../ui/icons/FilledHeartIcon.vue'
import OutlinedHeartIcon from '../ui/icons/OutlinedHeartIcon.vue'
import { computed, ref, watch } from 'vue'
import DealTable from './DealTable.vue'
import OffsetPagination from '@/components/ui/pagination/OffsetPagination.vue'
import CloseIcon from '@/components/ui/icons/CloseIcon.vue'
import { getDealGraph, getDealList, postLike } from '@/service/axios/apartment'
import { useUserStore } from '@/stores/user'

export interface ApartmentDetailProps {
  apartment: TApartment
  introduce: string
}
const props = defineProps<ApartmentDetailProps>()
defineEmits(['closeDetail'])

const graphData = ref<Record<string, number>>({})
const dealData = ref<TDeal[]>([])
const dealTotal = ref<number>(0)

const duration = ref<number>(1)
const curDealPage = ref<number>(1)

const { memberId } = useUserStore()

const toggleFavorite = async () => {
  const res = await postLike(memberId, props.apartment.aptSeq)
  if (!res) {
    alert('즐겨찾기 등록에 실패했습니다.')
    return
  }
  if (props.apartment.like) {
    alert('즐겨찾기를 해제했습니다.')
    props.apartment.like = 0
  } else {
    alert('즐겨찾기에 등록했습니다.')
    props.apartment.like = 1
  }
}

const computedGraphData = computed(() => convertDealToChartItems(duration.value, graphData.value))

const handleCurDealPage = (page: number) => {
  curDealPage.value = page
}

watch(
  props.apartment,
  async (nv, ov) => {
    if (nv.aptSeq !== ov?.aptSeq) {
      const data = await getDealGraph(nv.aptSeq)
      if (data) {
        graphData.value = data
      }
    }
  },
  {
    deep: true,
    immediate: true,
  },
)

watch(
  [props.apartment, curDealPage],
  async ([nApt, nPage], [oApt, oPage]) => {
    if (nApt.aptSeq !== oApt?.aptSeq || nPage !== oPage) {
      const data = await getDealList(nApt.aptSeq, { presentPage: nPage, limit: 20 })
      if (data) {
        dealData.value = data.data
        dealTotal.value = data.totalRow
      }
    }
  },
  {
    deep: true,
    immediate: true,
  },
)
</script>
