import { handlers as userHandlers } from './user'
import { handlers as locationHandlers } from './location'
import { handlers as apartmentHandlers } from './apartment'
import { handlers as aiChatHandlers } from './aiChat'
import { handlers as adminHandlers } from './admin'

export const handlers = [
  ...userHandlers,
  ...locationHandlers,
  ...apartmentHandlers,
  ...aiChatHandlers,
  ...adminHandlers,
]
