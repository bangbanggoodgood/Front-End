import { HttpResponse, delay } from 'msw'
import { chatsMock } from '../data'

export const postAiQuestionMock = async () => {
  const index = Math.floor(Math.random() * 6)
  await delay(1000)

  return HttpResponse.json({
    content: chatsMock[index],
  })
}
