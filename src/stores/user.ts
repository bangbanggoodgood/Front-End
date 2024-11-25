import { defineStore } from 'pinia'
import type { TUser } from '@/model'
import { userRole } from '@/lib/user'

export const useUserStore = defineStore('user', {
  state: (): TUser => ({ memberId: -1, role: userRole.user }),
  actions: {
    login({ memberId, role }: TUser): void {
      this.memberId = memberId
      this.role = role
    },
    logout(): void {
      this.memberId = -1
      this.role = userRole.user
    },
  },
})
