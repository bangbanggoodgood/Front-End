import type { TInfraInfo, TInfraKr } from '@/model'
import { ACADEMY, CAFE, HOSPITAL, infraToKr, MART, RESTAURANT, SCHOOL, STORE } from './utilKey'

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
