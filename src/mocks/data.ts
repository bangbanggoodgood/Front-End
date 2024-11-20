import type { TApartment, TDeal } from '@/model'

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
      '안녕하세요! 저는 2001년에 태어난 아파트예요. 교육 환경이 뛰어나고 편리한 생활 인프라를 자랑하며, 가족들과 함께 활기차고 편안한 삶을 꾸려나가기 딱 좋은 공간이에요! 😊 안녕하세요! 저는 2001년에 태어난 아파트예요. 교육 환경이 뛰어나고 편리한 생활 인프라를 자랑하며, 가족들과 함께 활기차고 편안한 삶을 꾸려나가기 딱 좋은 공간이에요! 😊',
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
    like: 0,
  },
  {
    id: 3,
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
  {
    id: 4,
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

export const generateFiveYearsData = () => {
  const data: Record<string, number> = {}
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const startYear = currentYear - 5

  for (let year = currentYear; year >= startYear; year--) {
    for (let month = 12; month >= 1; month--) {
      if (year === currentYear && month > currentMonth) {
        continue
      }
      const formattedMonth = month.toString().padStart(2, '0')
      const key = `${year}${formattedMonth}`
      data[key] = Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000
    }
  }

  return data
}

export const dealData: TDeal[] = [
  {
    id: 1,
    dealDate: '202411',
    price: 38000,
    area: 180.43,
    floor: 5,
  },
]

export const generateDealData = () => {
  const data: TDeal[] = []
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const startYear = currentYear - 5

  for (let year = currentYear; year >= startYear; year--) {
    for (let month = 12; month >= 1; month--) {
      if (year === currentYear && month > currentMonth) {
        continue
      }
      const formattedMonth = month.toString().padStart(2, '0')
      const key = `${year}${formattedMonth}`
      const price = Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000
      const area = Math.floor(Math.random() * (216.93 - 180.43 + 1)) + 180.43
      const floor = Math.floor(Math.random() * (10 - 1 + 1)) + 1

      data.push({
        id: data.length + 1,
        dealDate: key,
        price,
        area,
        floor,
      })
    }
  }

  return data
}
