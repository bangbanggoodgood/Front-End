import type { TStat, TUserInfo } from '@/model'
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

export const getUserList = async (useId: string): Promise<TUserInfo | false> => {
  try {
    const res = await admin.getUserList(useId)
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}

export const changeAuth = async (useId: string): Promise<boolean> => {
  try {
    await admin.changeAuth(useId)
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
