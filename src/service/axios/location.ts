import { location } from './api'

export const getSido = async (): Promise<string[] | false> => {
  try {
    const res = await location.getSido()
    return res.data.filter((item: string) => item)
  } catch (error) {
    console.error(error)
    return false
  }
}

export const getGugun = async (sido: string): Promise<string[] | false> => {
  try {
    const res = await location.getGugun(sido)
    return res.data.filter((item: string) => item)
  } catch (error) {
    console.error(error)
    return false
  }
}

export const getDong = async (sido: string, gugun: string): Promise<string[] | false> => {
  try {
    const res = await location.getDong(sido, gugun)
    return res.data.filter((item: string) => item)
  } catch (error) {
    console.error(error)
    return false
  }
}
