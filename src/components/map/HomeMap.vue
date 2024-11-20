<template>
  <div class="flex-grow" ref="mapContainer"></div>
</template>

<script setup lang="ts">
import { loadKakaoMap } from '@/util/map'
import { onMounted, ref } from 'vue'

const mapContainer = ref(null)
onMounted(() => {
  loadKakaoMap(mapContainer.value)
})
</script>
