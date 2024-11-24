import { HttpResponse } from 'msw'
import { userMock } from '../data'

export const getUser = async () => {
  return HttpResponse.json(userMock)
}
