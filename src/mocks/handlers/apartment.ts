import { http } from 'msw'
import {
  getAiIntroduceMock,
  getApartmentsMock,
  getDealChartMock,
  getDealGraphMock,
  postLikeMock,
} from '../util/apartment'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const handlers = [
  http.get(`${baseUrl}/apartments`, getApartmentsMock),
  http.get(`${baseUrl}/comments`, getAiIntroduceMock),
  http.post(`${baseUrl}/likes`, postLikeMock),
  http.get(`${baseUrl}/deals/detailGraph`, getDealGraphMock),
  http.get(`${baseUrl}/deals/detailChart`, getDealChartMock),
]
