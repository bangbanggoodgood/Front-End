import _ from 'lodash'

import type { TChartItem, TInfraInfo, TInfraKr } from '@/model'
import { ACADEMY, CAFE, HOSPITAL, infraToKr, MART, RESTAURANT, SCHOOL, STORE } from './keys/utilKey'

export const getKeywords = (infra: TInfraInfo): TInfraKr[] => {
  const result: TInfraKr[] = []
  if (infra[SCHOOL] > 0) {
    result.push(infraToKr['SCHOOL'])
  }
  if (infra[ACADEMY] > 5) {
    result.push(infraToKr['ACADEMY'])
  }
  if (infra[HOSPITAL] > 3) {
    result.push(infraToKr['HOSPITAL'])
  }
  if (infra[MART] > 0) {
    result.push(infraToKr['MART'])
  }
  if (infra[STORE] > 10) {
    result.push(infraToKr['STORE'])
  }
  if (infra[RESTAURANT] > 20) {
    result.push(infraToKr['RESTAURANT'])
  }
  if (infra[CAFE] > 20) {
    result.push(infraToKr['CAFE'])
  }

  return result
}

export const convertDealToChartItems = (data: Record<string, number>): TChartItem[] => {
  const dataLength = Object.keys(data).length
  const groupSize = dataLength >= 37 ? 6 : dataLength >= 13 ? 3 : 1 // Determine group size

  const groupedAverages = _.chain(data)
    .toPairs() // Convert object to array of [key, value]
    .filter(([_, value]) => value !== 0) // Exclude items with value 0
    .chunk(groupSize) // Group items based on group size
    .map((chunk) => {
      // Calculate average value and format date
      const average = _.meanBy(chunk, ([, value]) => value) // Average value of the chunk
      const key = chunk[0][0] // Use the key of the first item in the chunk for the month

      return {
        month: `${key.slice(0, 4)}.${key.slice(4, 6)}`, // Format as "YYYY.MM"
        nested: { value: Math.round(average) }, // Round average value to nearest integer
      }
    })
    .value() // Get the final transformed array

  return groupedAverages
}
