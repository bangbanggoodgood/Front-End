import type { TApartmentSearch } from '@/model'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
})

export const location = {
  getSido: async () => {
    return instance.get('/sido')
  },
  getGugun: async (sido: string) => {
    return instance.get('/gugun', {
      params: {
        sido,
      },
    })
  },
  getDong: async (sido: string, gugun: string) => {
    return instance.get('/dong', {
      params: {
        sido,
        gugun,
      },
    })
  },
}

export const apartment = {
  getApartments: async (query: TApartmentSearch) => {
    return instance.get('/apartments', {
      params: {
        ...query,
        targetMinPrice: Number(query.targetMinPrice),
        targetMaxPrice: Number(query.targetMaxPrice),
      },
    })
  },
}

export const aiChat = {
  postAiChat: async (message: string) => {
    return instance.post('/questions', {
      data: {
        message,
      },
    })
  },
}
