import type { TJwt } from '@/model'
import { sessionStorage } from '@/util/browserStorage'
import { jwtDecode } from 'jwt-decode'
import { axiosInstance } from './api'

let interceptor: number
export const insertToken = (token: string, userStore: any) => {
  const decodedToken: TJwt = jwtDecode(token)
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
  if (decodedToken) {
    const { memberId, auth, exp } = decodedToken
    if (memberId && auth) {
      userStore.login({ memberId, role: auth })
    }
    interceptor = axiosInstance.interceptors.request.use((config) => {
      const currentTime = Date.now() / 1000
      if (exp && exp < currentTime) {
        logout(userStore, '/')
        return Promise.reject('Token expired')
      }
      return config
    })
  }
}

export const logout = (userStore: any, href: string) => {
  userStore.logout()
  sessionStorage.removeItem('access_token')
  axiosInstance.defaults.headers.common['Authorization'] = ''
  axiosInstance.interceptors.request.eject(interceptor)
  window.location.href = href
}
