import type { TApartment, TApartmentSearch, TPageResponse } from '@/model'
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
  aptSeqs: number[],
): Promise<Record<number, string> | false> => {
  try {
    const result: Record<number, string> = {}
    for (const aptSeq of aptSeqs) {
      const res = await apartment.getAiIntroduce(aptSeq)
      result[aptSeq] = res.data.comment
    }
    return result
  } catch (e) {
    console.error(e)
    return false
  }
}
