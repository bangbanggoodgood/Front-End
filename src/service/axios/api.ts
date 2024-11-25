import type { TApartmentSearch, TPageRequest, TUserSignUp } from '@/model'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
})

export const user = {
  signUp: async (info: TUserSignUp) => {
    return axiosInstance.post('users/signUp', {
      ...info,
    })
  },
  getUser: async () => {
    return axiosInstance.get(`/users`)
  },
  checkId: async (memberId: string) => {
    return axiosInstance.post('/users/check', {
      memberId,
    })
  },
}

export const location = {
  getSido: async () => {
    return axiosInstance.get('/sido')
  },
  getGugun: async (sido: string) => {
    return axiosInstance.get('/gugun', {
      params: {
        sido,
      },
    })
  },
  getDong: async (sido: string, gugun: string) => {
    return axiosInstance.get('/dong', {
      params: {
        sido,
        gugun,
      },
    })
  },
}

export const apartment = {
  getApartments: async (query: TApartmentSearch) => {
    return axiosInstance.get('/apartments', {
      params: {
        ...query,
        targetMinPrice: Number(query.targetMinPrice),
        targetMaxPrice: Number(query.targetMaxPrice),
      },
    })
  },
  getAiIntroduce: async (aptSeq: string) => {
    return axiosInstance.get(`/comments`, {
      params: {
        aptSeq,
      },
    })
  },
  getLikes: async (memberId: number, { limit, presentPage }: TPageRequest) => {
    return axiosInstance.get(`/likes/${memberId}`, {
      params: {
        limit,
        presentPage,
      },
    })
  },
  postLike: async (memberId: number, aptSeq: string) => {
    return axiosInstance.post('/likes', {
      memberId,
      aptSeq,
    })
  },
  getDealGraph: async (aptSeq: string) => {
    return axiosInstance.get('/deals/detailGraph', {
      params: {
        aptSeq,
        period: 5,
      },
    })
  },
  getDealList: async (aptSeq: string, { presentPage, limit }: TPageRequest) => {
    return axiosInstance.get('/deals/detailChart', {
      params: {
        aptSeq,
        presentPage,
        limit,
      },
    })
  },
}

export const aiChat = {
  postAiChat: async (question: string) => {
    return axiosInstance.post('/questions', {
      data: {
        question,
      },
    })
  },
}
