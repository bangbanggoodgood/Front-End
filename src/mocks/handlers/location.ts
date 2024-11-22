import { http } from 'msw'
import { getGugunMock, getSidoMock } from '../util/location'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const handlers = [
  http.get(`${baseUrl}/sido`, getSidoMock),
  http.get(`${baseUrl}/gugun`, getGugunMock),
]
