import type { TAnalysis } from '@/model'
import { axiosInstance } from './axios/api'
const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const sendAnalysis = async (analysis: TAnalysis) => {
  axiosInstance.post(`${baseUrl}/time`, { ...analysis })
}
