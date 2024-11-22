import { defineStore } from 'pinia'
import type { TUser } from '@/model'
import { userRole } from '@/lib/user'

export const useUserStore = defineStore('user', {
  state: (): TUser => ({ memberId: -1, name: '', role: userRole.admin }),
  actions: {
    login({ memberId, name, role }: TUser): void {
      this.memberId = memberId
      this.name = name
      this.role = role
    },
    logout(): void {
      this.name = ''
    },
  },
})
