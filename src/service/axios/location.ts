import { location } from './api'

export const getSido = async (): Promise<string[] | false> => {
  try {
    const res = await location.getSido()
    return res.data
  } catch (error) {
    console.error(error)
    return false
  }
}
