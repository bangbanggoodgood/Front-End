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
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심 좌표
        level: 3, // 지도 확대 레벨
        maxLevel: 5, // 지도 축소 제한 레벨
      }

      const mapInstance = new window.kakao.maps.Map(container, options) // 지도 생성
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
