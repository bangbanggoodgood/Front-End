import type { infraArray, infraArrayKr, keywords } from '@/lib/infra'
import type { userRole } from '@/lib/user'
import type { jobs } from '@/lib/job'
import type { DefaultBodyType, PathParams, StrictRequest } from 'msw'

// job, keyword, infra
export type TJob = (typeof jobs)[number]
export type TKeyword = (typeof keywords)[number]

export type TInfra = (typeof infraArray)[number]
export type TInfraKr = (typeof infraArrayKr)[number]
export interface TInfraInfo extends Record<TInfra, number> {}

// user
export type TUserRole = (typeof userRole)[keyof typeof userRole]
export interface TUser {
  memberId: number
  name: string
  role: TUserRole
}
export interface TUserInfo extends TUser {
  birth: string
  sex: string
  job: TJob
  categories: TKeyword[]
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
export type TStat = 'infra' | 'sex' | 'age' | 'price'
export type TInfraStat = Record<'total' | TInfra, number>
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
  coords: any[]
  markers: any[]
}
