import { HttpResponse } from 'msw'
import { sidoMock } from '../data'

export const getSidoMock = async () => {
  return HttpResponse.json(sidoMock)
}
