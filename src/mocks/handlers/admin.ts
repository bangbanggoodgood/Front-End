import { http } from 'msw'
import { getStatMock, getUserListMock, changeAuthMock } from '../util/admin'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const handlers = [
  http.get(`${baseUrl}/admin/statics`, getStatMock),
  http.post(`${baseUrl}/admin/userList`, getUserListMock),
  http.post(`${baseUrl}/admin/authority`, changeAuthMock),
]
