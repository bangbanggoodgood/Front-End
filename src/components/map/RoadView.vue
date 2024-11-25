<template>
  <div ref="roadViewContainer" class="w-full h-full"></div>
</template>

<script setup lang="ts">
import { loadRoadView } from '@/util/map'
import { onUnmounted, ref, watch } from 'vue'

export interface RoadViewProps {
  address: string
}
const props = defineProps<RoadViewProps>()
const roadViewContainer = ref(null)
let timeoutId = 0

watch(
  () => [roadViewContainer.value, props.address],
  () => {
    if (roadViewContainer.value && props.address) {
      loadRoadView(roadViewContainer.value, props.address)
    }
  },
  { deep: true, immediate: true },
)

onUnmounted(() => {
  clearTimeout(timeoutId)
})
</script>
