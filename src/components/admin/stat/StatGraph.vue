<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script setup lang="ts">
import { infraToKr } from '@/lib/infra'
import { sexToKrMapper } from '@/lib/stat'
import type { TInfra, TStat } from '@/model'
import { Chart, registerables } from 'chart.js'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

export interface DealChartProps {
  data: Record<string, number>
  type: TStat
}
const props = defineProps<DealChartProps>()

Chart.register(...registerables)

const chart = ref()
let chartInstance: any = null

const keys = computed(() => Object.keys(props.data).filter((key) => key !== 'total'))
const labels = computed(() =>
  keys.value.map((key) => {
    if (props.type === 'infra') {
      return infraToKr[key as TInfra]
    }
    return sexToKrMapper[key]
  }),
)
const values = computed(() => keys.value.map((key) => props.data[key]))

const data = {
  datasets: [
    {
      data: values.value,
    },
  ],

  labels: labels.value,
}

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: props.type === 'infra' ? '인프라' : '성별',
    },
  },
}

const createChart = () => {
  if (chartInstance) {
    chartInstance.destroy()
  }

  chartInstance = new Chart(chart.value, {
    type: 'pie',
    data,
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
