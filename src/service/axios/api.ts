import type { TApartmentSearch, TPageRequest, TUserSignUp } from '@/model'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
})

export const user = {
  signUp: async (info: TUserSignUp) => {
    return instance.post('users/signUp', {
      ...info,
    })
  },
  getUser: async () => {
    return instance.get(`/users`)
  },
  checkId: async (memberId: string) => {
    return instance.post('/users/check', {
      memberId,
    })
  },
}

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
  getAiIntroduce: async (aptSeq: string) => {
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
  postLike: async (memberId: number, aptSeq: string) => {
    return instance.post('/likes', {
      memberId,
      aptSeq,
    })
  },
  getDealGraph: async (aptSeq: string) => {
    return instance.get('/deals/detailGraph', {
      params: {
        aptSeq,
        period: 5,
      },
    })
  },
  getDealList: async (aptSeq: string, { presentPage, limit }: TPageRequest) => {
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
  postAiChat: async (question: string) => {
    return instance.post('/questions', {
      data: {
        question,
      },
    })
  },
}
