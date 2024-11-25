import type { TMockRequest } from '@/model'
import { HttpResponse } from 'msw'
import { aiCommentMock, apartmentsMock, dealChartMock, dealGraphMock } from '../data'

export const getApartmentsMock = async ({ request }: TMockRequest) => {
  const url = new URL(request.url)
  const presentPage = Number(url.searchParams.get('presentPage'))
  const limit = Number(url.searchParams.get('limit'))
  return HttpResponse.json({
    totalRow: apartmentsMock.length,
    aptDto: apartmentsMock.slice((presentPage - 1) * limit, presentPage * limit),
  })
}

export const getAiIntroduceMock = async ({ request }: TMockRequest) => {
  const url = new URL(request.url)
  const aptSeq = Number(url.searchParams.get('aptSeq'))
  return HttpResponse.json({
    content: `mock${aptSeq}: ` + aiCommentMock,
  })
}

export const postLikeMock = async () => {
  return HttpResponse.json()
}

export const getDealGraphMock = async () => {
  return HttpResponse.json(dealGraphMock)
}

export const getDealChartMock = async ({ request }: TMockRequest) => {
  const url = new URL(request.url)
  const presentPage = Number(url.searchParams.get('presentPage'))
  const limit = Number(url.searchParams.get('limit'))
  return HttpResponse.json({
    totalRow: dealChartMock.length,
    aptDto: dealChartMock.slice((presentPage - 1) * limit, presentPage * limit),
  })
}
