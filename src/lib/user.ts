const user = 'USER'
const admin = 'ADMIN'
export const userRole = { user, admin } as const
export const userRoleToKr = {
  USER: '일반 사용자',
  ADMIN: '관리자',
} as const
