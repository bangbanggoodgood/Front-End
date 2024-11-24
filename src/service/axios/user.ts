import type { TUserInfo } from '@/model'
import { user } from './api'

export const getUser = async (): Promise<TUserInfo | false> => {
  try {
    const res = await user.getUser()
    return res.data
  } catch (e) {
    console.error(e)
    return false
  }
}
