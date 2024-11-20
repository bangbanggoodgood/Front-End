import type { infraArray, infraArrayKr } from '@/util/utilKey'

export interface TUser {
  name: string
}

export interface TDropDownList {
  list: string[]
}

export interface TDropDown extends TDropDownList {
  placeholder: string
  isOpened: boolean
  alt: string
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
