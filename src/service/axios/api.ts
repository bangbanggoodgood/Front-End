import axios from 'axios'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
})

export const aiChat = {
  postAiChat: async (message: string) => {
    console.log(baseUrl)

    return instance.post('/questions', {
      data: {
        message,
      },
    })
  },
}
