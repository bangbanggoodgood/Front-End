import type { TApartment, TApartmentSearch, TDeal, TPageRequest, TPageResponse } from '@/model'
import { apartment } from './api'

export const getApartments = async (
  query: TApartmentSearch,
): Promise<TPageResponse<TApartment> | false> => {
  try {
    if (query.targetMinPrice === '') {
      query.targetMinPrice = '-1'
    }
    if (query.targetMaxPrice === '') {
      query.targetMaxPrice = '-1'
    }
    const res = await apartment.getApartments(query)
    return {
      totalRow: res.data.totalRow,
      data: res.data.aptDto,
    }
  } catch (e) {
    console.error(e)
    return false
  }
}

export const getAiIntroduces = async (
  aptSeqs: string[],
): Promise<Record<string, string> | false> => {
  try {
    const result: Record<string, string> = {}
    for (const aptSeq of aptSeqs) {
      const res = await apartment.getAiIntroduce(aptSeq)
      result[aptSeq] = res.data.content
    }
    return result
  } catch (e) {
    console.error(e)
    return false
  }
}

export const getLikes = async (
  memberId: number,
  { presentPage, limit }: TPageRequest,
): Promise<TPageResponse<TApartment> | false> => {
  try {
    const res = await apartment.getLikes(memberId, { presentPage, limit })
    return {
      totalRow: res.data.totalRow,
      data: res.data.aptDto,
    }
  } catch (e) {
    console.error(e)
    return false
  }
}

export const postLike = async (memberId: number, aptSeq: string): Promise<boolean> => {
  try {
    await apartment.postLike(memberId, aptSeq)
    return true
  } catch (e) {
    console.error(e)
    return false
  }
}

export const getDealGraph = async (aptSeq: string): Promise<Record<string, number> | false> => {
  try {
    const res = await apartment.getDealGraph(aptSeq)
    return res.data
  } catch (e) {
    console.error(e)
    return false
  }
}

export const getDealList = async (
  aptSeq: string,
  { presentPage, limit }: TPageRequest,
): Promise<TPageResponse<TDeal> | false> => {
  try {
    const res = await apartment.getDealList(aptSeq, { presentPage, limit })
    return {
      totalRow: res.data.totalRow,
      data: res.data.data,
    }
  } catch (e) {
    console.error(e)
    return false
  }
}
