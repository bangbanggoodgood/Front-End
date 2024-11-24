import { http } from 'msw'
import { getDongMock, getGugunMock, getSidoMock } from '../util/location'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const handlers = [
  http.get(`${baseUrl}/sido`, getSidoMock),
  http.get(`${baseUrl}/gugun`, getGugunMock),
  http.get(`${baseUrl}/dong`, getDongMock),
]
