import _ from 'lodash'

export const numberToKrMoney = (amount: number, unit: '' | '만' = '만'): string => {
  if (_.isNaN(amount) || amount < 0) {
    throw new Error('금액은 0 이상의 숫자여야 합니다.')
  }

  const units = unit === '만' ? ['만', '억', '조', '경'] : ['', '만', '억', '조', '경']

  const result = _.chain(units)
    .map((unit, index) => {
      const chunk = amount % 10000
      amount = Math.floor(amount / 10000)
      return chunk > 0 ? `${chunk.toLocaleString()}${unit}` : null
    })
    .compact() // Remove `null` values
    .reverse() // Correct order since we're building chunks from smallest to largest
    .join(' ') // Combine into a single string
    .value()

  return result
}
