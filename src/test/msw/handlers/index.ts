import { postsHandlers } from 'test/msw/handlers/posts'
import { searchHandlers } from 'test/msw/handlers/search'
import { weatherHandlers } from 'test/msw/handlers/weather'

export const handlers = [
  // ...db.posts.toHandlers('rest'),
  ...postsHandlers,
  ...searchHandlers,
  ...weatherHandlers,
]
