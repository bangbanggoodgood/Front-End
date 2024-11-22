import { HttpResponse, delay } from 'msw'
import { chatsMock } from '../data'

export const postAiQuestion = async () => {
  const index = Math.floor(Math.random() * 10)
  await delay(1000)

  return HttpResponse.json({
    content: chatsMock[index],
  })
}
