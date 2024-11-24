import { handlers as locationHandlers } from './location'
import { handlers as apartmentHandlers } from './apartment'
import { handlers as aiChatHandlers } from './aiChat'

export const handlers = [...locationHandlers, ...apartmentHandlers, ...aiChatHandlers]
