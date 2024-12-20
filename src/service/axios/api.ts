import type { TApartmentSearch, TPageRequest, TStat, TUserSignUp } from '@/model'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 15000,
})

export const user = {
  signUp: async (info: TUserSignUp) => {
    return axiosInstance.post('/users/signUp', {
      ...info,
    })
  },
  getUser: async () => {
    return axiosInstance.get(`/users`)
  },
  checkId: async (useId: string) => {
    return axiosInstance.post('/users/check', {
      useId,
    })
  },
  withdrawal: async () => {
    return axiosInstance.delete('/users')
  },
}

export const location = {
  getSido: async () => {
    return axiosInstance.get('/info/sido')
  },
  getGugun: async (sido: string) => {
    return axiosInstance.get('/info/gugun', {
      params: {
        sido,
      },
    })
  },
  getDong: async (sido: string, gugun: string) => {
    return axiosInstance.get('/info/dong', {
      params: {
        sido,
        gugun,
      },
    })
  },
}

export const apartment = {
  getApartments: async (query: TApartmentSearch) => {
    return axiosInstance.post(`/deals?presentPage=${query.presentPage}&limit=${query.limit}`, {
      sidoName: query.sidoName,
      gugunName: query.gugunName,
      dongName: query.dongName,
      aptName: query.aptName,
      targetMinPrice: query.targetMinPrice,
      targetMaxPrice: query.targetMaxPrice,
      // params: {
      //   presentPage: query.presentPage,
      //   limit: query.limit
      //   // targetMinPrice: Number(query.targetMinPrice),
      //   // targetMaxPrice: Number(query.targetMaxPrice),
      // },
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
  getAiIntroduce: async (aptSeq: string) => {
    return axiosInstance.get(`/comments`, {
      params: {
        aptSeq,
      },
    })
  },
  getLikes: async (memberId: number, { limit, presentPage }: TPageRequest) => {
    return axiosInstance.get(`/likes`, {
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
}

export const aiChat = {
  postAiChat: async (question: string) => {
    return axiosInstance.post('/questions', {
      question,
    })
  },
}

export const admin = {
  getStats: async (kind: TStat) => {
    return axiosInstance.get('/admin/statics', {
      params: {
        kind,
      },
    })
  },
  getUserList: async (useId: string) => {
    return axiosInstance.post('/admin/userList', {
      useId,
    })
  },
  changeAuth: async (useId: string) => {
    return axiosInstance.post('/admin/authority', {
      useId,
    })
  },
}
