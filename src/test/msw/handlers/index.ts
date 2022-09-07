import { postsHandlers } from 'test/msw/handlers/posts'
import { searchHandlers } from 'test/msw/handlers/search'

export const handlers = [
  // ...db.posts.toHandlers('rest'),
  ...postsHandlers,
  ...searchHandlers,
]
