import type { TStorage } from '@/model'

export const sessionStorage = {
  setItem: (key: string, value: Object): void => {
    window.sessionStorage.setItem(key, JSON.stringify({ value }))
  },
  getItem: (key: string): TStorage => {
    const value = window.sessionStorage.getItem(key)
    return value ? JSON.parse(value) : null
  },
  removeItem: (key: string): void => {
    window.sessionStorage.removeItem(key)
  },
}
