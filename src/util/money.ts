export function numberToKrMoney(amount: number): string {
  if (isNaN(amount) || amount < 0) {
    throw new Error('금액은 0 이상의 숫자여야 합니다.')
  }

  const units = ['', '만', '억', '조', '경']
  const result: string[] = []

  let unitIndex = 0

  while (amount > 0) {
    const chunk = amount % 10000
    amount = Math.floor(amount / 10000)

    if (chunk > 0) {
      const localeString = chunk.toLocaleString()
      result.unshift(localeString + units[unitIndex])
    }

    unitIndex++
  }

  return result.join(' ')
}
