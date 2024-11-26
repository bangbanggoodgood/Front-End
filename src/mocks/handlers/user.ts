import { http } from 'msw'
import { checkId, getUser, signUp, withdrawal } from '../util/user'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const handlers = [
  http.post(`${baseUrl}/users/signUp`, signUp),
  http.get(`${baseUrl}/users`, getUser),
  http.post(`${baseUrl}/users/check`, checkId),
  http.delete(`${baseUrl}/users`, withdrawal),
]
