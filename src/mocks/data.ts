import type { TApartment } from '@/model'

export const apartments: TApartment[] = [
  {
    id: 1,
    aptNm: '하이츠빌리지',
    buildYear: '2001',
    minArea: 180.43,
    maxArea: 216.93,
    address: '경기도 성남시 분당구 쇳골로 22',
    infra: {
      SCHOOL: 3,
      ACADEMY: 8,
      HOSPITAL: 5,
      MART: 3,
      STORE: 8,
      RESTAURANT: 22,
      CAFE: 18,
    },
    minDealAmount: 375000000,
    maxDealAmount: 412000000,
    introduce:
      '안녕하세요! 저는 2001년에 태어난 아파트예요. 교육 환경이 뛰어나고 편리한 생활 인프라를 자랑하며, 가족들과 함께 활기차고 편안한 삶을 꾸려나가기 딱 좋은 공간이에요! 😊',
    like: 1,
  },
  {
    id: 2,
    aptNm: '아이파크 2차',
    buildYear: '2008',
    minArea: 185.4,
    maxArea: 231.28,
    address: '경기도 성남시 분당구 느티로 70',
    infra: {
      SCHOOL: 1,
      ACADEMY: 6,
      HOSPITAL: 3,
      MART: 0,
      STORE: 28,
      RESTAURANT: 14,
      CAFE: 30,
    },
    minDealAmount: 391000000,
    maxDealAmount: 422000000,
    introduce:
      '안녕하세요! 저는 2008년에 태어난 아파트예요. 교육 환경이 뛰어나고 편리한 생활 인프라를 자랑하며, 가족들과 함께 활기차고 편안한 삶을 꾸려나가기 딱 좋은 공간이에요! 😊',
    like: 1,
  },
]
