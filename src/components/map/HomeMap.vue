<template>
  <div class="flex-grow" ref="mapContainer"></div>
</template>

<script setup lang="ts">
import { loadKakaoMap } from '@/util/map'
import { onMounted, onUpdated, ref } from 'vue'

const mapContainer = ref(null)
onMounted(() => {
  loadKakaoMap(mapContainer.value)
})
onUpdated(() => {
  loadKakaoMap(mapContainer.value)
})
</script>
