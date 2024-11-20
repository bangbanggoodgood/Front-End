<template>
  <aside class="flex flex-col gap-4 w-[26rem] px-6 py-4 bg-white shadow-xl z-40">
    <h2 class="mb-2 text-xl">매매 내역 검색</h2>
    <section class="flex flex-col gap-3">
      <div class="flex justify-between gap-2">
        <DropDown
          placeholder="시/도"
          :list="['서울특별시', '경기도', '인천광역시', '강원도']"
          :isOpened="dropdown === 1"
          @onClick="sidoClick"
          @toggleDropDown="toggleSidoDropDown"
          :alt="''"
        />
        <DropDown
          placeholder="시/군/구"
          :list="[]"
          :isOpened="dropdown === 2"
          @onClick="sigunguClick"
          @toggleDropDown="toggleSigunguDropDown"
          :alt="'시/도를 선택해주세요'"
        />
        <DropDown
          placeholder="읍/면/동"
          :list="[]"
          :isOpened="dropdown === 3"
          @onClick="eubmyundongClick"
          @toggleDropDown="toggleEubmyundongDropDown"
          :alt="'시/군/구를 선택해주세요'"
        />
      </div>
      <div class="text-text flex items-center">
        <hr class="flex-grow" />
        <button class="px-2 flex" @click="isDetailSearch = !isDetailSearch">
          <span>상세검색</span> <ArrowDownIcon v-if="!isDetailSearch" /> <ArrowUpIcon v-else />
        </button>
        <hr class="flex-grow" />
      </div>
      <DetailSearch v-if="isDetailSearch" />
      <Button class="self-end" variant="outline">검색</Button>
    </section>
    <section class="flex flex-col gap-2">
      <h2 class="text-xl">검색 결과 ({{ apartments.length }})</h2>
      <ul class="flex flex-col gap-5">
        <li v-for="apartment in apartments" :id="apartment.id.toString()">
          <ApartmentCard :apartment="apartment" />
        </li>
      </ul>
      <OffsetPagination
        class="mt-2"
        :totalItem="100"
        :curPage="curPage"
        @handleCurPage="handleCurPage"
      />
    </section>
  </aside>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import DropDown from '../ui/DropDown.vue'
import ArrowDownIcon from '../ui/icons/ArrowDownIcon.vue'
import DetailSearch from './DetailSearch.vue'
import ArrowUpIcon from '../ui/icons/ArrowUpIcon.vue'
import { Button } from '@/components/ui/button'
import ApartmentCard from '../apartment/ApartmentCard.vue'
import { apartments } from '@/mocks/data'
import OffsetPagination from '../ui/pagination/OffsetPagination.vue'

const dropdown = ref(0)
const isDetailSearch = ref(false)
const curPage = ref(1)

watch(curPage, (nv, ov) => {
  console.log(nv, ov)
})

const sidoClick = (item: string) => {
  console.log(item)
}
const toggleSidoDropDown = () => {
  dropdown.value = dropdown.value === 1 ? 0 : 1
}
const sigunguClick = (item: string) => {
  console.log(item)
}
const toggleSigunguDropDown = () => {
  dropdown.value = dropdown.value === 2 ? 0 : 2
}
const eubmyundongClick = (item: string) => {
  console.log(item)
}
const toggleEubmyundongDropDown = () => {
  dropdown.value = dropdown.value === 3 ? 0 : 3
}

const handleCurPage = (nextPage: number) => {
  curPage.value = nextPage
}
</script>
