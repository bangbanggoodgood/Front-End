import { daysInMonth } from '@/lib/date'

export const validateBirthDate = (value: string) => {
  // Check if the length is 6
  if (value.length !== 6) {
    return false
  }

  // Extract year, month, and day
  const year = parseInt(value.slice(0, 2), 10)
  const month = parseInt(value.slice(2, 4), 10)
  const day = parseInt(value.slice(4, 6), 10)

  // Validate month
  if (month < 1 || month > 12) {
    return false
  }

  // Adjust February for leap years
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  if (month === 2 && isLeapYear) {
    daysInMonth[1] = 29
  }

  // Validate day
  if (day < 1 || day > daysInMonth[month - 1]) {
    return false
  }

  return true
}

export const formattedDate = (dateString: string): string => {
  if (dateString.length !== 8 || isNaN(Number(dateString))) {
    return ''
  }

  const year = dateString.slice(0, 4)
  const month = dateString.slice(4, 6)
  const day = dateString.slice(6, 8)

  return `${year}.${month}.${day}`
}
