import { HttpResponse } from 'msw'
import type { TMockRequest } from '@/model'
import { ageStatMock, priceStatMock, sexStatMock, userMock } from '../data'

export const getStatMock = async ({ request }: TMockRequest) => {
  const url = new URL(request.url)
  const kind = url.searchParams.get('kind')
  return HttpResponse.json(
    kind === 'sex' ? sexStatMock : kind === 'age' ? ageStatMock : priceStatMock,
  )
}

export const getUserListMock = async () => {
  return HttpResponse.json(userMock)
}

export const changeAuthMock = async () => {
  return HttpResponse.json()
}
