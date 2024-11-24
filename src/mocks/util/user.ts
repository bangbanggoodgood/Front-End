import { HttpResponse } from 'msw'
import { userMock } from '../data'

export const signUp = async () => {
  return HttpResponse.json({ memberId: 1 })
}

export const getUser = async () => {
  return HttpResponse.json(userMock)
}

export const checkId = async () => {
  return HttpResponse.json({ isValid: true })
}
