import { http } from 'msw'
import { getApartments } from '../util/apartment'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const handlers = [http.get(`${baseUrl}/apartments`, getApartments)]
