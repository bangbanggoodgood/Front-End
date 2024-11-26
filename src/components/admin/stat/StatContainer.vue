<template>
  <title-text>서비스 통계</title-text>
  <div class="grid grid-cols-2 gap-x-4 gap-y-20">
    <stat-graph :data="ageStat" type="age" />
    <stat-graph :data="sexStat" type="sex" />
    <stat-graph :data="priceStat" type="price" />
  </div>
</template>

<script setup lang="ts">
import StatGraph from '@/components/admin/stat/StatGraph.vue'
import TitleText from '@/components/ui/typography/TitleText.vue'
import { getStat } from '@/service/axios/admin'
import { onMounted, ref } from 'vue'

const ageStat = ref<Record<string, number>>({})
const sexStat = ref<Record<string, number>>({})
const priceStat = ref<Record<string, number>>({})

onMounted(async () => {
  const ageStatRes = await getStat('age')
  const sexStatRes = await getStat('sex')
  const priceStatRes = await getStat('price')
  if (ageStatRes) ageStat.value = ageStatRes
  if (sexStatRes) sexStat.value = sexStatRes
  if (priceStatRes) priceStat.value = priceStatRes
})
</script>
