// - 학교 (**"schools"**)
// - 학원 (**”academy”**)
// - 병원 / 약국 (**”healthCare”**)
// - 마트 / 편의점 (**”convinience”**)
// - 음식점 ( 전체 합쳐서 ) (**”restaurant”**)
// - 카페 (**”cafe”**)
// - 술집 (**”pubs”**)
// - 여가 활동 ( 스포츠랑 유원지 합쳐서) (**”leisure”**)
// - 버스 (**”bus”**)
// - 지하철 (**”subway”**)
// - 동물 병원 (**”petHospital”**)
export const SCHOOLS = 'schools'
export const ACADEMY = 'academy'
export const HEALTHCARE = 'healthCare'
export const CONVINIENCE = 'convinience'
export const RESTAURANT = '”restaurant”'
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
