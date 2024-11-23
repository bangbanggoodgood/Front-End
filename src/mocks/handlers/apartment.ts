import { http } from 'msw'
import { getAiIntroduce, getApartments } from '../util/apartment'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const handlers = [
  http.get(`${baseUrl}/apartments`, getApartments),
  http.get(`${baseUrl}/comments`, getAiIntroduce),
]
