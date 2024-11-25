export const SCHOOLS = 'schools'
export const ACADEMY = 'academy'
export const HEALTHCARE = 'healthCare'
export const CONVINIENCE = 'convinience'
export const RESTAURANT = 'restaurant'
export const CAFE = 'cafe'
export const PUBS = 'pubs'
export const LEISURE = 'leisure'
export const BUS = 'bus'
export const SUBWAY = 'subway'
export const PETHOSPITAL = 'petHospital'

export const infraToKr = {
  [SCHOOLS]: '학교',
  [ACADEMY]: '학원',
  [HEALTHCARE]: '병원/약국',
  [CONVINIENCE]: '마트/편의점',
  [RESTAURANT]: '음식점',
  [CAFE]: '카페',
  [PUBS]: '술집',
  [LEISURE]: '여가활동',
  [BUS]: '버스',
  [SUBWAY]: '지하철',
  [PETHOSPITAL]: '동물병원',
} as const
export const infraArray = [
  SCHOOLS,
  ACADEMY,
  HEALTHCARE,
  CONVINIENCE,
  RESTAURANT,
  CAFE,
  PUBS,
  LEISURE,
  BUS,
  SUBWAY,
  PETHOSPITAL,
] as const
export const infraArrayKr = [
  infraToKr[SCHOOLS],
  infraToKr[ACADEMY],
  infraToKr[HEALTHCARE],
  infraToKr[CONVINIENCE],
  infraToKr[RESTAURANT],
  infraToKr[CAFE],
  infraToKr[PUBS],
  infraToKr[LEISURE],
  infraToKr[BUS],
  infraToKr[SUBWAY],
  infraToKr[PETHOSPITAL],
] as const
