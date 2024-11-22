import { HttpResponse } from 'msw'
import { gugunMock, sidoMock } from '../data'

export const getSidoMock = async () => {
  return HttpResponse.json(sidoMock)
}

export const getGugunMock = async () => {
  return HttpResponse.json(gugunMock)
}
