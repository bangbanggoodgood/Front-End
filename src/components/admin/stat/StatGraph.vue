<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script setup lang="ts">
import { sexToKrMapper } from '@/lib/stat'
import type { TStat } from '@/model'
import { Chart, registerables } from 'chart.js'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

export interface DealChartProps {
  data: Record<string, number>
  type: TStat
}
const props = defineProps<DealChartProps>()

const chart = ref()
let chartInstance: any = null

const keys = computed(() => Object.keys(props.data).filter((key) => key !== 'total'))
const labels = computed(() =>
  keys.value.map((key) => {
    if (props.type === 'sex') return sexToKrMapper[key]
    return key
  }),
)
const values = computed(() => keys.value.map((key) => props.data[key]))

const data = computed(() => {
  return {
    datasets: [
      {
        data: values.value,
      },
    ],
    labels: labels.value,
  }
})

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: props.type === 'sex' ? '성별' : props.type === 'age' ? '연령대' : '가격',
    },
  },
}

const createChart = () => {
  if (chartInstance) {
    chartInstance.destroy()
  }
  if (Object.keys(props.data).length === 0) return

  chartInstance = new Chart(chart.value, {
    type: 'pie',
    data: data.value,
    options,
  })
}

watch(
  () => props.data,
  () => {
    createChart()
  },
  {
    deep: true,
    immediate: true,
  },
)

onMounted(() => {
  Chart.register(...registerables)
  createChart()
})
onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy()
    chartInstance = null
  }
})
</script>
