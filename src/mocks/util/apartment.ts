import type { TMockRequest } from '@/model'
import { HttpResponse } from 'msw'
import { apartmentsMock } from '../data'

export const getApartments = async ({ request }: TMockRequest) => {
  const url = new URL(request.url)
  const presentPage = Number(url.searchParams.get('presentPage'))
  const limit = Number(url.searchParams.get('limit'))
  return HttpResponse.json({
    totalRow: apartmentsMock.length,
    aptDto: apartmentsMock.slice((presentPage - 1) * limit, presentPage * limit),
  })
}