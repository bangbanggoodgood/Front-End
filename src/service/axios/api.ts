import type { TApartmentSearch, TJwt, TPageRequest, TUserSignUp } from '@/model'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
})

// let interceptor: number
// export const insertToken = (token: string, userStore: any) => {
//   console.log('insertToken', token)
//   const decodedToken: TJwt = jwtDecode(token)
//   axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
//   if (decodedToken) {
//     const { memberId, auth, exp } = decodedToken
//     if (memberId && auth) {
//       userStore.login({ memberId, role: auth })
//     }
//     interceptor = axiosInstance.interceptors.request.use((config) => {
//       const currentTime = Date.now() / 1000
//       if (exp && exp < currentTime) {
//         logout(userStore, '/')
//         return Promise.reject('Token expired')
//       }
//       return config
//     })
//   }
// }

// export const logout = (userStore: any, href: string) => {
//   userStore.logout()
//   sessionStorage.removeItem('access_token')
//   axiosInstance.defaults.headers.common['Authorization'] = undefined
//   axiosInstance.interceptors.request.eject(interceptor)
//   window.location.href = href
// }

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
