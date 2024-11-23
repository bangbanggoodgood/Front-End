import _ from 'lodash'

export const isNaturalNumber = (value: any, includeZero = false): boolean => {
  if (_.isNaN(value) || !Number.isInteger(Number(value))) {
    return false
  }

  return includeZero ? value >= 0 : value > 0
}
