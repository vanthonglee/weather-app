import { searchHandlers } from 'test/msw/handlers/search'
import { weatherHandlers } from 'test/msw/handlers/weather'

export const handlers = [...searchHandlers, ...weatherHandlers]
