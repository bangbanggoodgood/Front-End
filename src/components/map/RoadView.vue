<template>
  <div ref="roadViewContainer" class="w-full h-full"></div>
</template>

<script setup lang="ts">
import { loadRoadView } from '@/util/map'
import { onMounted, onUnmounted, ref } from 'vue'
const roadViewContainer = ref(null)
let timeoutId = 0

onMounted(() => {
  timeoutId = setTimeout(() => {
    loadRoadView(roadViewContainer.value)
  }, 1000)
})
onUnmounted(() => {
  clearTimeout(timeoutId)
})
</script>
