import { infraArray } from '@/lib/infra'
import { userRole } from '@/lib/user'
import type { TAgeStat, TApartment, TDeal, TPriceState, TSexStat, TUserInfo } from '@/model'

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

export const gugunMock: (string | null)[] = [
  null,
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

export const dongMock: (string | null)[] = [
  null,
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
      hashtags: ['고양이와눈싸움', '잔잔한행복', '느림의미학', '오늘의 오늘', '내일의 내일'],
      minDealAmount: 37500,
      maxDealAmount: 41200,
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
  useId: 'junhakjh',
  name: '김준하',
  role: userRole.admin,
  birth: '99.06.12',
  sex: '남성',
  job: 'IT개발/데이터',
}

// stat
// const generateInfraStatMock = (): TInfraStat => {
//   const infraStats: Partial<TInfraStat> = {}
//   let total = 0

//   infraArray.forEach((infra) => {
//     const randomValue = Math.floor(Math.random() * 1000) + 1
//     infraStats[infra] = randomValue
//     total += randomValue
//   })

//   return {
//     ...infraStats,
//     total,
//   } as TInfraStat
// }
// export const infraStatMock = generateInfraStatMock()
export const sexStatMock: TSexStat = {
  total: 1000,
  male: 450,
  female: 550,
}
export const ageStatMock: TAgeStat = {
  total: 1,
  '10대': 0,
  '20대': 1,
  '30대': 0,
  '40대': 0,
  '50대': 0,
  '60대': 0,
  '70대 이상': 0,
}
export const priceStatMock: TPriceState = {
  total: 1,
  '3억 이하': 0,
  '3 - 4억': 0,
  '4 - 5억': 0,
  '5 - 6억': 0,
  '6 - 7억': 0,
  '7억 이상': 1,
}
// export const

// aiChat
export const chatsMock: string[] = [
  '동해물과',
  '남산 위에 저 ',
  '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세',
  '남산 위에 저 소나무 철갑을 두른듯 남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세',
  '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세',
  '남산 위에 저 소나무 철갑을 두른듯 남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세',
]
