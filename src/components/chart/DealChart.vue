<template>
  <canvas ref="chart" />
</template>

<script setup lang="ts">
import type { TChartItem } from '@/model'
import { Chart, registerables } from 'chart.js'
import { onMounted, ref } from 'vue'

export interface DealChartProps {
  data: TChartItem[]
}
const props = defineProps<DealChartProps>()

Chart.register(...registerables)

const chart = ref()

onMounted(() => {
  createChart()
})

const data = {
  datasets: [
    {
      label: '평균 거래가(만 원)',
      data: props.data,
      backgroundColor: '#ffffff',
      borderColor: '#6DD3FF',
      borderWidth: 1,
    },
  ],
}
const options = {
  parsing: {
    xAxisKey: 'month',
    yAxisKey: 'nested.value',
  },
}
const createChart = () => {
  new Chart(chart.value, {
    type: 'line',
    data: data,
    options: options,
  })
}
</script>
