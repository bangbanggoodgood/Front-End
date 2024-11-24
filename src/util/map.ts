import { useMapStore } from '@/stores/map'

const { VITE_APP_KAKAO_MAP_KEY } = import.meta.env

export const loadKakaoMap = (container: any) => {
  var script: HTMLScriptElement | null = document.querySelector('#kakaomap-script')
  if (script) {
    script.remove()
  }

  script = document.createElement('script')
  script.id = 'kakaomap-script'
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${VITE_APP_KAKAO_MAP_KEY}&autoload=false&libraries=services,clusterer`
  document.head.appendChild(script)

  script.onload = () => {
    window.kakao.maps.load(() => {
      let center = new window.kakao.maps.LatLng(37.211471, 127.043012)
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude,
            lon = position.coords.longitude

          center = new window.kakao.maps.LatLng(lat, lon) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        })
      }
      const options = {
        center,
        level: 3, // 지도 확대 레벨
      }
      const map = useMapStore()

      const mapInstance = new window.kakao.maps.Map(container, options) // 지도 생성
      var zoomControl = new window.kakao.maps.ZoomControl()
      mapInstance.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT)

      map.setMap(mapInstance)
    })
  }
}

export const loadRoadView = (container: any) => {
  const roadView = new window.kakao.maps.Roadview(container)
  const roadViewClient = new window.kakao.maps.RoadviewClient() //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

  const geocoder = new window.kakao.maps.services.Geocoder()
  geocoder.addressSearch('경기도 성남시 분당구 쇳골로 22', function (result: any, status: any) {
    if (status === window.kakao.maps.services.Status.OK) {
      var position = new window.kakao.maps.LatLng(result[0].y, result[0].x)

      roadViewClient.getNearestPanoId(position, 50, function (panoId: any) {
        roadView.setPanoId(panoId, position) //panoId와 중심좌표를 통해 로드뷰 실행
      })
    }
  })
}

export const searchPlaces = (keywords: string[], mapStore: any) => {
  mapStore.removeMarkers()
  var geocoder = new window.kakao.maps.services.Geocoder()
  // var bounds = new window.kakao.maps.LatLngBounds()
  for (const keyword of keywords) {
    console.log(keyword)
    geocoder.addressSearch(keyword, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면
      if (status === window.kakao.maps.services.Status.OK) {
        var coord = new window.kakao.maps.LatLng(result[0].y, result[0].x)

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new window.kakao.maps.Marker({
          map: mapStore.map,
          position: coord,
        })

        mapStore.addMarker(marker)
        mapStore.addCoords(coord)
        // mapStore.map.setCenter(coord)
        // bounds.extend(coord)
        // console.log(coord, bounds)
        // // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        // mapStore.map.setCenter(
        //   new window.kakao.maps.LatLng(result[0].y, Number(result[0].x) - 0.0028),
        // )
      }
    })
  }
  // return bounds
}

export const displayMarker = (place: any, mapStore: any) => {
  // 마커를 생성하고 지도에 표시합니다
  var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 })
  var marker = new window.kakao.maps.Marker({
    map: mapStore.map,
    position: new window.kakao.maps.LatLng(place.y, place.x),
  })

  // 마커에 클릭이벤트를 등록합니다
  window.kakao.maps.event.addListener(marker, 'click', function () {
    infowindow.open(mapStore.map, marker)
  })
  mapStore.setMarker(marker)
}
