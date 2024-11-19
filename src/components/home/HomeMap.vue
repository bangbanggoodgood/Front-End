<template>
  <div class="flex-grow" ref="mapContainer"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const { VITE_APP_KAKAO_MAP_KEY } = import.meta.env

const mapContainer = ref(null)
onMounted(() => {
  loadKakaoMap(mapContainer.value)
})

const loadKakaoMap = (container) => {
  const script = document.createElement('script')
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${VITE_APP_KAKAO_MAP_KEY}&autoload=false`
  document.head.appendChild(script)

  script.onload = () => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심 좌표
        level: 3, // 지도 확대 레벨
        maxLevel: 5, // 지도 축소 제한 레벨
      }

      const mapInstance = new window.kakao.maps.Map(container, options) // 지도 생성
    })
  }
}
</script>
