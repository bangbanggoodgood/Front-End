<template>
  <canvas ref="chart" />
</template>

<script setup lang="ts">
import type { TChartItem } from '@/model'
import { Chart, registerables } from 'chart.js'
import { computed, onBeforeUnmount, onMounted, onUpdated, ref, watch } from 'vue'

export interface DealChartProps {
  data: TChartItem[]
}
const props = defineProps<DealChartProps>()

Chart.register(...registerables)

const chart = ref()
let chartInstance: any = null

const data = computed(() => ({
  datasets: [
    {
      label: '평균 거래가(만 원)',
      data: props.data,
      backgroundColor: '#ffffff',
      borderColor: '#6DD3FF',
      borderWidth: 1,
    },
  ],
}))

const options = {
  parsing: {
    xAxisKey: 'id',
    yAxisKey: 'nested.value',
  },
}

const createChart = () => {
  if (chartInstance) {
    chartInstance.destroy()
  }

  chartInstance = new Chart(chart.value, {
    type: 'line',
    data: data.value,
    options,
  })
}

watch(() => props.data, createChart)

onMounted(() => {
  createChart()
})
onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy()
    chartInstance = null
  }
})
</script>
