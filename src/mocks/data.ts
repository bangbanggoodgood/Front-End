import { infraArray } from '@/lib/infra'
import { userRole } from '@/lib/user'
import type {
  TApartment,
  TChat,
  TDeal,
  TInfraStat,
  TLocationResponse,
  TSexStat,
  TUserInfo,
} from '@/model'

// location
export const sidoMock: TLocationResponse[] = [
  { name: '서울특별시' },
  { name: '부산광역시' },
  { name: '대구광역시' },
  { name: '인천광역시' },
  { name: '광주광역시' },
  { name: '대전광역시' },
  { name: '울산광역시' },
  { name: '세종특별자치도' },
  { name: '경기도' },
  { name: '강원도' },
  { name: '충청북도' },
  { name: '충청남도' },
  { name: '전라북도' },
  { name: '전라남도' },
  { name: '경상북도' },
  { name: '경상남도' },
  { name: '제주특별자치도' },
]

export const gugunMock: (TLocationResponse | null)[] = [
  null,
  { name: '강남구' },
  { name: '강동구' },
  { name: '강북구' },
  { name: '강서구' },
  { name: '관악구' },
  { name: '광진구' },
  { name: '구로구' },
  { name: '금천구' },
  { name: '노원구' },
  { name: '도봉구' },
  { name: '동대문구' },
  { name: '동작구' },
  { name: '마포구' },
  { name: '서대문구' },
  { name: '서초구' },
  { name: '성동구' },
  { name: '성북구' },
  { name: '송파구' },
  { name: '양천구' },
  { name: '영등포구' },
  { name: '용산구' },
  { name: '은평구' },
  { name: '종로구' },
  { name: '중구' },
  { name: '중랑구' },
]

export const dongMock: (TLocationResponse | null)[] = [
  null,
  { name: '개포동' },
  { name: '논현동' },
  { name: '대치동' },
  { name: '도곡동' },
  { name: '삼성동' },
  { name: '세곡동' },
  { name: '수서동' },
  { name: '신사동' },
  { name: '압구정동' },
  { name: '역삼동' },
  { name: '율현동' },
  { name: '일원동' },
  { name: '자곡동' },
  { name: '청담동' },
]

// apartment
const addressMock = [
  '서울 강남구 테헤란로 212',
  '서울 강남구 테헤란로 216',
  '서울 강남구 언주로85길 14',
  '서울 강남구 테헤란로 211',
  '서울 강남구 테헤란로 134',
  '서울 서초구 서초대로78길 24',
  '서울 강남구 테헤란로1길 16',
  '서울 강남구 테헤란로 138',
  '서울 강남구 테헤란로 123',
  '서울 강남구 테헤란로10길 21',
]
const generateApartmentsMock = (limit: number): TApartment[] => {
  const result: TApartment[] = []
  for (let i = 1; i <= limit; i++) {
    const infra: Record<string, number> = {}
    let total = 0

    infraArray.forEach((item) => {
      const randomValue = Math.floor(Math.random() * 30) + 1
      infra[item] = randomValue
      total += randomValue
    })

    result.push({
      aptSeq: i + '',
      aptNm: `아파트 ${i}`,
      buildYear: '2001',
      minArea: 180.43,
      maxArea: 216.93,
      address: addressMock[i % addressMock.length],
      infra,
      minDealAmount: 375000000,
      maxDealAmount: 412000000,
      like: 1,
    })
  }

  return result
}
export const apartmentsMock: TApartment[] = generateApartmentsMock(100)
export const aiCommentMock: string =
  '안녕하세요! 저는 2008년에 태어난 아파트예요. 교육 환경이 뛰어나고 편리한 생활 인프라를 자랑하며, 가족들과 함께 활기차고 편안한 삶을 꾸려나가기 딱 좋은 공간이에요! 😊'

// deal
export const generateFiveYearsData = (): Record<string, number> => {
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
export const dealGraphMock: Record<string, number> = generateFiveYearsData()
export const generateDealMock = (): TDeal[] => {
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
export const dealChartMock: TDeal[] = generateDealMock()

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
