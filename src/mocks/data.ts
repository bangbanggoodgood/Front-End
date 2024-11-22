import { infraArray } from '@/lib/infra'
import { userRole } from '@/lib/user'
import type { TApartment, TChat, TDeal, TInfraStat, TSexStat, TUserInfo } from '@/model'

// location
export const sidoMock: string[] = [
  '서울특별시',
  '부산광역시',
  '대구광역시',
  '인천광역시',
  '광주광역시',
  '대전광역시',
  '울산광역시',
  '세종특별자치도',
  '경기도',
  '강원도',
  '충청북도',
  '충청남도',
  '전라북도',
  '전라남도',
  '경상북도',
  '경상남도',
  '제주특별자치도',
]
export const gugunMock: string[] = [
  '강남구',
  '강동구',
  '강북구',
  '강서구',
  '관악구',
  '광진구',
  '구로구',
  '금천구',
  '노원구',
  '도봉구',
  '동대문구',
  '동작구',
  '마포구',
  '서대문구',
  '서초구',
  '성동구',
  '성북구',
  '송파구',
  '양천구',
  '영등포구',
  '용산구',
  '은평구',
  '종로구',
  '중구',
  '중랑구',
]
export const dongMock: string[] = [
  '개포동',
  '논현동',
  '대치동',
  '도곡동',
  '삼성동',
  '세곡동',
  '수서동',
  '신사동',
  '압구정동',
  '역삼동',
  '율현동',
  '일원동',
  '자곡동',
  '청담동',
]

// apartment
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

// deal
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
export const dealMock: TDeal[] = [
  {
    id: 1,
    dealDate: '202411',
    price: 38000,
    area: 180.43,
    floor: 5,
  },
]
export const generateDealMock = () => {
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

// user
export const userMock: TUserInfo = {
  memberId: 1,
  name: '김준하',
  role: userRole.admin,
  birth: '99.06.12',
  sex: '남성',
  job: 'IT개발/데이터',
  categories: ['가격', '마트/편의점', '카페', '음식점'],
}

// stat
const generateInfraStatMock = (): TInfraStat => {
  const infraStats: Partial<TInfraStat> = {}
  let total = 0

  infraArray.forEach((infra) => {
    const randomValue = Math.floor(Math.random() * 1000) + 1
    infraStats[infra] = randomValue
    total += randomValue
  })

  return {
    ...infraStats,
    total,
  } as TInfraStat
}
export const infraStatMock = generateInfraStatMock()
export const sexStatMock: TSexStat = {
  total: 1000,
  male: 450,
  female: 550,
}
// export const

// aiChat
export const chatsMock: TChat[] = [
  {
    isAi: true,
    message: '동해물과',
  },
  {
    isAi: true,
    message: '남산 위에 저 ',
  },
  {
    isAi: true,
    message: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세',
  },
  {
    isAi: true,
    message:
      '남산 위에 저 소나무 철갑을 두른듯 남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세',
  },
  {
    isAi: true,
    message: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세',
  },
  {
    isAi: true,
    message:
      '남산 위에 저 소나무 철갑을 두른듯 남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세',
  },
  {
    isAi: true,
    message: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세',
  },
  {
    isAi: true,
    message:
      '남산 위에 저 소나무 철갑을 두른듯 남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세',
  },
  {
    isAi: true,
    message: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세',
  },
  {
    isAi: true,
    message:
      '남산 위에 저 소나무 철갑을 두른듯 남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세',
  },
]
