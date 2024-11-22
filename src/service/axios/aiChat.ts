import type { TChat } from '@/model'
import { aiChat } from './api'

export const postAiChat = async (message: string): Promise<TChat | false> => {
  try {
    const res = await aiChat.postAiChat(message)
    return res.data.content
  } catch (e) {
    console.error(e)
    return false
  }
}
