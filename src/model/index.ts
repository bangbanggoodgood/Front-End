import type { infraArray, infraArrayKr } from '@/lib/infra'

export interface TUser {
  name: string
}

export type TInfra = (typeof infraArray)[number]
export type TInfraKr = (typeof infraArrayKr)[number]

export interface TInfraInfo extends Record<TInfra, number> {}

export interface TApartment {
  id: number
  aptNm: string
  buildYear: string
  minArea: number
  maxArea: number
  address: string
  infra: TInfraInfo
  minDealAmount: number
  maxDealAmount: number
  introduce: string
  like: 0 | 1
}

export interface TChartItem {
  month: string
  nested: {
    value: number
  }
}

export interface TDeal {
  id: number
  dealDate: string
  price: number
  area: number
  floor: number
}

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
