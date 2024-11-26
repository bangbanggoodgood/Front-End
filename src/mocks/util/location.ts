import { HttpResponse } from 'msw'
import { dongMock, gugunMock, sidoMock } from '../data'

export const getSidoMock = async () => {
  return HttpResponse.json(sidoMock)
}

export const getGugunMock = async () => {
  return HttpResponse.json(gugunMock)
}

export const getDongMock = async () => {
  return HttpResponse.json(dongMock)
}
