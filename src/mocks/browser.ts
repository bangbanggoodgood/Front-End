import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

const worker = setupWorker(...handlers)

export const initMsw = async () => {
  if (import.meta.env.DEV) {
    await worker.start()
  }
  return Promise.resolve()
}
