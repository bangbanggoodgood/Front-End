import type { TStat } from '@/model'
import { admin } from './api'

export const getStat = async (kind: TStat): Promise<Record<string, number> | false> => {
  try {
    const res = await admin.getStats(kind)
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}
