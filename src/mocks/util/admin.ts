import { HttpResponse } from 'msw'
import type { TMockRequest } from '@/model'
import { ageStatMock, priceStatMock, sexStatMock } from '../data'

export const getStatMock = async ({ request }: TMockRequest) => {
  const url = new URL(request.url)
  const kind = url.searchParams.get('kind')
  return HttpResponse.json(
    kind === 'sex' ? sexStatMock : kind === 'age' ? ageStatMock : priceStatMock,
  )
}
