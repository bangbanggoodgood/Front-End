import type { infraArray, infraArrayKr } from '@/lib/infra'
import type { userRole } from '@/lib/user'
import type { jobs } from '@/lib/job'
import type { DefaultBodyType, PathParams, StrictRequest } from 'msw'

// jwt
export interface TJwt {
  auth: TUserRole
  memberId: number
  sub: number
  exp: number
}

// job, keyword, infra
export type TJob = (typeof jobs)[number]

export type TInfra = (typeof infraArray)[number]
export type TInfraKr = (typeof infraArrayKr)[number]
export interface TInfraInfo extends Record<TInfra, number> {}

// user
export type TUserRole = (typeof userRole)[keyof typeof userRole]
export interface TUser {
  memberId: number
  role: TUserRole
}
export interface TUserInfo extends TUser {
  useId: string
  name: string
  birth: string
  sex: string
  job: TJob
}
export interface TUserSignUp {
  name: string
  birth: string
  sex: string
  job: string
  useId: string
}

// apartment
export interface TApartment {
  aptSeq: string
  aptNm: string
  buildYear: string
  minArea: number
  maxArea: number
  address: string
  infra: TInfraInfo
  tags: string[]
  minDealAmount: number
  maxDealAmount: number
  like: 0 | 1
}
export interface TApartmentSearch extends TPageRequest {
  sidoName: string
  gugunName: string
  dongName: string
  targetMinPrice: string
  targetMaxPrice: string
  aptName: string
}

// deal
export interface TDeal {
  id: number
  dealDate: string
  price: number
  area: number
  floor: number
}

// chart
export interface TChartItem {
  id: string
  nested: {
    value: number
  }
}

// didimdol
export interface TDidimdolDescriptionInfo {
  title: string
  infos: string[]
}
export interface TInterestRate {
  tenTwo: string
  fifteenTwo: string
  twentyTwo: string
  thirtyTwo: string
  tenFour: string
  fifteenFour: string
  twentyFour: string
  thirtyFour: string
  tenSix: string
  fifteenSix: string
  twentySix: string
  thirtySix: string
  applyDate: string
}

// stats
export type TStat = 'sex' | 'age' | 'price'
export type TSexStat = {
  total: number
  male: number
  female: number
}
export type TAgeStat = Record<string, number>
export type TPriceState = Record<string, number>

// chat
export interface TChat {
  isAi: boolean
  message: string
}

// api
export interface TPageRequest {
  presentPage: number
  limit: number
}
export interface TPageResponse<T> {
  totalRow: number
  data: T[]
}

// msw
export interface TMockRequest {
  request: StrictRequest<DefaultBodyType>
  params: PathParams
}

// store
export interface TMapStore {
  map: any
  coords: Record<string, any>
  markers: any[]
}

// analysis
export interface TAnalysis {
  time: number
  aptSeq: string
}

// browserStorage
export interface TStorage {
  value: any
}
