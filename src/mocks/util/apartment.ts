import type { TMockRequest } from '@/model'
import { HttpResponse } from 'msw'
import { aiCommentMock, apartmentsMock } from '../data'

export const getApartments = async ({ request }: TMockRequest) => {
  const url = new URL(request.url)
  const presentPage = Number(url.searchParams.get('presentPage'))
  const limit = Number(url.searchParams.get('limit'))
  return HttpResponse.json({
    totalRow: apartmentsMock.length,
    aptDto: apartmentsMock.slice((presentPage - 1) * limit, presentPage * limit),
  })
}

export const getAiIntroduce = async ({ request }: TMockRequest) => {
  const url = new URL(request.url)
  const aptSeq = Number(url.searchParams.get('aptSeq'))
  return HttpResponse.json({
    comment: `mock${aptSeq}: ` + aiCommentMock,
  })
}

export const postLike = async () => {
  return HttpResponse.json()
}
