import type { TApartmentSearch, TPageRequest } from '@/model'
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
  getAiIntroduce: async (aptSeq: number) => {
    return instance.get(`/comments`, {
      params: {
        aptSeq,
      },
    })
  },
  getLikes: async (memberId: number, { limit, presentPage }: TPageRequest) => {
    return instance.get(`/likes/${memberId}`, {
      params: {
        limit,
        presentPage,
      },
    })
  },
  postLike: async (memberId: number, aptSeq: number) => {
    return instance.post('/likes', {
      memberId,
      aptSeq,
    })
  },
  getDealGraph: async (aptSeq: number) => {
    return instance.get('/deals/detailGraph', {
      params: {
        aptSeq,
      },
    })
  },
  getDealList: async (aptSeq: number, { presentPage, limit }: TPageRequest) => {
    return instance.get('/deals/detailChart', {
      params: {
        aptSeq,
        presentPage,
        limit,
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
