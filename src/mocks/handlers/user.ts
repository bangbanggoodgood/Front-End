import { http } from 'msw'
import { getUser } from '../util/user'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const handlers = [http.get(`${baseUrl}/users`, getUser)]
