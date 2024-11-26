import type { TUserInfo, TUserSignUp } from '@/model'
import { user } from './api'

export const signUp = async (info: TUserSignUp): Promise<boolean> => {
  try {
    await user.signUp(info)
    return true
  } catch (e) {
    console.error(e)
    return false
  }
}

export const getUser = async (): Promise<TUserInfo | false> => {
  try {
    const res = await user.getUser()
    return res.data
  } catch (e) {
    console.error(e)
    return false
  }
}

export const checkId = async (memberId: string): Promise<boolean> => {
  try {
    const res = await user.checkId(memberId)
    return res.data.valid
  } catch (e) {
    console.error(e)
    return false
  }
}

export const withdrawal = async (): Promise<boolean> => {
  try {
    await user.withdrawal()
    return true
  } catch (e) {
    console.error(e)
    return false
  }
}
