import { defineStore } from 'pinia'
import type { TUser } from '@/model'

export const useUserStore = defineStore('user', {
  state: (): TUser => ({ name: '' }),
  actions: {
    login({ name }: TUser): void {
      this.name = name
    },
    logout(): void {
      this.name = ''
    },
  },
})
