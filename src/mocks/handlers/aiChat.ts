import { http } from 'msw'
import { postAiQuestionMock } from '../util/aiChat'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const handlers = [http.post(`${baseUrl}/questions`, postAiQuestionMock)]
