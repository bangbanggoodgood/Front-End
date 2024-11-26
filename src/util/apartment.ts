import _ from 'lodash'

import type { TChartItem } from '@/model'

export const convertDealToChartItems = (
  duration: number,
  rawData: Record<string, number>,
): TChartItem[] => {
  if (isNaN(duration) || duration <= 0) {
    throw new Error('Duration must be a positive number representing years.')
  }

  // Get the current year and month
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth() + 1

  // Calculate the cutoff year and month based on duration
  const cutoffYear = currentYear - duration
  const cutoffKey = `${cutoffYear}${String(currentMonth).padStart(2, '0')}`

  // Filter rawData to include only keys within the specified duration
  const filteredData = Object.keys(rawData)
    .filter((key) => key >= cutoffKey)
    .reduce<Record<string, number>>((acc, key) => {
      acc[key] = rawData[key]
      return acc
    }, {})

  const dataLength = Object.keys(filteredData).length
  const groupSize = dataLength >= 37 ? 6 : dataLength >= 13 ? 3 : 1 // Determine group size

  const groupedAverages = _.chain(filteredData)
    .toPairs() // Convert object to array of [key, value]
    .filter(([_, value]) => value !== 0) // Exclude items with value 0
    .chunk(groupSize) // Group items based on group size
    .map((chunk) => {
      // Calculate average value and format date
      const average = _.meanBy(chunk, ([, value]) => value) // Average value of the chunk
      const key = chunk[0][0] // Use the key of the first item in the chunk for the month

      return {
        id: `${key.slice(0, 4)}.${key.slice(4, 6)}`, // Format as "YYYY.MM"
        nested: { value: Math.round(average) }, // Round average value to nearest integer
      }
    })
    .value() // Get the final transformed array

  return groupedAverages
}
