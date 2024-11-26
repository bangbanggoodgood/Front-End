import { http } from 'msw'
import { getDongMock, getGugunMock, getSidoMock } from '../util/location'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const handlers = [
  http.get(`${baseUrl}/info/sido`, getSidoMock),
  http.get(`${baseUrl}/info/gugun`, getGugunMock),
  http.get(`${baseUrl}/info/dong`, getDongMock),
]
