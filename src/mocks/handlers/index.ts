import { handlers as aiChatHandlers } from './aiChat'
import { handlers as locationHandlers } from './location'

export const handlers = [...locationHandlers, ...aiChatHandlers]
