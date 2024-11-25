<template>
  <div class="bg-white shadow-xl w-[26rem] relative">
    <aside
      class="bg-none flex flex-col gap-4 h-[calc(100vh-5rem)] p-4 w-[60rem] overflow-y-auto scrollbar-hide z-40"
    >
      <section class="w-[24rem]" v-if="isHome">
        <h2 class="mb-2 text-xl">매매 내역 검색</h2>
        <section class="flex flex-col gap-3">
          <div class="flex justify-between gap-2">
            <DropDown
              :placeholder="selectedSido"
              :list="sidoList"
              :isOpened="dropdown === 1"
              @onClick="sidoClick"
              @toggleDropDown="toggleSidoDropDown"
              :alt="''"
            />
            <DropDown
              :placeholder="selectedGugun"
              :list="gugunList"
              :isOpened="dropdown === 2"
              @onClick="gugunClick"
              @toggleDropDown="toggleGugunDropDown"
              :alt="'시/도를 선택해주세요'"
            />
            <DropDown
              :placeholder="selectedDong"
              :list="dongList"
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
          <detail-search v-if="isDetailSearch" />
          <Button class="self-end" variant="outline" @click="search()">검색</Button>
        </section>
      </section>
      <div class="w-[24rem] flex flex-col gap-2">
        <h2 class="text-xl" ref="resultTitleRef">
          {{ isHome ? '검색 결과' : '즐겨찾기' }} ({{ totalResult }})
        </h2>
        <ul class="flex flex-col gap-5">
          <li
            v-for="apartment in apartments"
            :key="apartment.aptSeq"
            @click="handleApartmentClick(apartment)"
          >
            <apartment-card :apartment="apartment" :introduce="aiIntroduces[apartment.aptSeq]" />
          </li>
        </ul>
        <offset-pagination
          class="mt-2"
          :totalItem="totalResult"
          :curPage="curPage"
          :itemsPerPage="APARTMENT_LIMIT_PAGE"
          @handleCurPage="handleCurPage"
        />
      </div>
      <Transition name="slide-fade">
        <section
          v-if="apartment"
          class="absolute -left-8 translate-x-full h-[calc(100%-2rem)] overflow-y-auto rounded-xl z-10"
        >
          <apartment-detail
            :apartment="apartment"
            :introduce="aiIntroduces[apartment.aptSeq]"
            @close-detail="closeDetail"
          />
        </section>
      </Transition>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, provide, ref, watch, type Ref } from 'vue'
import DropDown from '../ui/DropDown.vue'
import ArrowDownIcon from '../ui/icons/ArrowDownIcon.vue'
import DetailSearch from './DetailSearch.vue'
import ArrowUpIcon from '../ui/icons/ArrowUpIcon.vue'
import { Button } from '@/components/ui/button'
import ApartmentCard from '@/components/apartment/ApartmentCard.vue'
import ApartmentDetail from '@/components/apartment/ApartmentDetail.vue'
import OffsetPagination from '../ui/pagination/OffsetPagination.vue'
import type { TApartment } from '@/model'
import { useRoute } from 'vue-router'
import { getDong, getGugun, getSido } from '@/service/axios/location'
import { getAiIntroduces, getApartments, getLikes } from '@/service/axios/apartment'
import { moveScrollTo } from '@/util/scroll'
import { isNaturalNumber } from '@/util/number'
import { useUserStore } from '@/stores/user'
import { searchPlaces } from '@/util/map'
import { useMapStore } from '@/stores/map'
import { APARTMENT_LIMIT_PAGE } from '@/lib/pagination'

const sidoList = ref<string[]>([])
const gugunList = ref<string[]>([])
const dongList = ref<string[]>([])
const apartments = ref<TApartment[]>([])
const totalResult = ref(0)
const aiIntroduces = ref<Record<string, string>>({})

const selectedSido = ref<string>('시/도')
const selectedGugun = ref<string>('시/군/구')
const selectedDong = ref<string>('읍/면/동')
const targetMinPrice = ref<string>('')
const targetMaxPrice = ref<string>('')
const searchWord = ref('')
provide('targetMinPrice', targetMinPrice)
provide('targetMaxPrice', targetMaxPrice)
provide('searchWord', searchWord)

const dropdown = ref(0)
const isDetailSearch = ref(false)
const curPage = ref(1)
const apartment: Ref<TApartment | null> = ref(null)

const resultTitleRef = ref<HTMLElement | null>(null)

const route = useRoute()
const { memberId } = useUserStore()
const map = useMapStore()

const isHome = computed(() => route.path === '/')

let timeoutId: number

onMounted(async () => {
  if (isHome.value) {
    const data = await getSido()
    if (data) {
      sidoList.value = data
    } else {
      alert('시/도 정보를 가져오는데 실패했습니다.')
    }
  } else {
    timeoutId = setTimeout(() => {
      search()
    }, 1000)
  }
})
onUnmounted(() => {
  clearTimeout(timeoutId)
})

const toggleSidoDropDown = () => {
  dropdown.value = dropdown.value === 1 ? 0 : 1
}
const sidoClick = async (sido: string) => {
  selectedSido.value = sido
  selectedGugun.value = '시/군/구'
  selectedDong.value = '읍/면/동'
  const data = await getGugun(sido)
  if (data) {
    gugunList.value = data
  } else {
    alert('시/군/구 정보를 가져오는데 실패했습니다.')
  }
}

const toggleGugunDropDown = () => {
  dropdown.value = dropdown.value === 2 ? 0 : 2
}
const gugunClick = async (gugun: string) => {
  selectedGugun.value = gugun
  selectedDong.value = '읍/면/동'
  const data = await getDong(selectedSido.value, gugun)
  if (data) {
    dongList.value = ['전체', ...data]
  } else {
    alert('읍/면/동 정보를 가져오는데 실패했습니다.')
  }
}

const toggleEubmyundongDropDown = () => {
  dropdown.value = dropdown.value === 3 ? 0 : 3
}
const eubmyundongClick = (item: string) => {
  selectedDong.value = item
}

const search = async (page: number = 1) => {
  if (isHome.value) {
    if (
      (targetMinPrice.value && !isNaturalNumber(targetMinPrice.value, true)) ||
      (targetMaxPrice.value && !isNaturalNumber(targetMaxPrice.value, true))
    ) {
      alert('가격은 0 이상의 숫자로 입력해주세요.')
      return
    }
    if (
      targetMinPrice.value &&
      targetMaxPrice.value &&
      targetMinPrice.value > targetMaxPrice.value
    ) {
      alert('최소 가격은 최대 가격보다 작거나 같게 입력해주세요.')
      return
    }
  }

  const data = await (isHome
    ? getApartments({
        sidoName: selectedSido.value,
        gugunName: selectedGugun.value,
        dongName: selectedDong.value,
        targetMinPrice: targetMinPrice.value,
        targetMaxPrice: targetMaxPrice.value,
        aptName: searchWord.value,
        presentPage: page,
        limit: APARTMENT_LIMIT_PAGE,
      })
    : getLikes(memberId, {
        presentPage: page,
        limit: APARTMENT_LIMIT_PAGE,
      }))

  if (data) {
    apartments.value = data.data
    totalResult.value = data.totalRow
    const introduceData = await getAiIntroduces(data.data.map((item) => item.aptSeq))
    if (introduceData) {
      aiIntroduces.value = introduceData
    }
    searchPlaces(
      data.data,
      // data.data.map((item) => item.address),
      map,
      handleApartmentClick,
    )
    moveScrollTo(resultTitleRef.value, 'start')
  } else {
    alert('검색 결과를 가져오는데 실패했습니다.')
  }
}
watch(
  () => map.coords,
  (nv) => {
    if (Object.keys(nv).length > 0) {
      var bounds = new window.kakao.maps.LatLngBounds()
      for (const coord of Object.values(nv)) {
        bounds.extend(coord)
      }
      map.map.setBounds(bounds)
    }
  },
  {
    deep: true,
  },
)

const handleCurPage = (nextPage: number) => {
  curPage.value = nextPage
  apartment.value = null
  search(nextPage)
}

const handleApartmentClick = (clickedApartment: TApartment) => {
  apartment.value = clickedApartment
  const coord = map.coords[clickedApartment.aptSeq]
  map.map.panTo(new window.kakao.maps.LatLng(coord.getLat(), coord.getLng() - 0.0028))
}

const closeDetail = () => {
  apartment.value = null
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(7rem);
  opacity: 0;
}
</style>
