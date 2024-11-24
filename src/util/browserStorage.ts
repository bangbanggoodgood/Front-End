export const sessionStorage = {
  setItem: (key: string, value: Object): void => {
    window.sessionStorage.setItem(key, JSON.stringify({ value }))
  },
  getItem: (key: string): Object => {
    const value = window.sessionStorage.getItem(key)
    return value ? JSON.parse(value) : null
  },
}
