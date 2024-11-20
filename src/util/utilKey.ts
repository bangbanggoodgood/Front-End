export const SCHOOL = 'SCHOOL'
export const ACADEMY = 'ACADEMY'
export const HOSPITAL = 'HOSPITAL'
export const MART = 'MART'
export const STORE = 'STORE'
export const RESTAURANT = 'RESTAURANT'
export const CAFE = 'CAFE'

export const infraToKr = {
  SCHOOL: '학교',
  ACADEMY: '학원',
  HOSPITAL: '병원',
  MART: '마트',
  STORE: '편의점',
  RESTAURANT: '음식점',
  CAFE: '카페',
} as const
export const infraArray = [SCHOOL, ACADEMY, HOSPITAL, MART, STORE, RESTAURANT, CAFE] as const
export const infraArrayKr = [
  infraToKr[SCHOOL],
  infraToKr[ACADEMY],
  infraToKr[HOSPITAL],
  infraToKr[MART],
  infraToKr[STORE],
  infraToKr[RESTAURANT],
  infraToKr[CAFE],
] as const
