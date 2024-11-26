import { http } from 'msw'
import { getStatMock } from '../util/admin'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const handlers = [http.get(`${baseUrl}/admin/statics`, getStatMock)]
