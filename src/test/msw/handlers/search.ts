/* eslint-disable @typescript-eslint/no-explicit-any */

import { rest } from 'msw'

import Env from 'config/Env'
import { Post } from 'features/posts'
import { db, persistDb } from 'test/msw/db'

const BASE_URL = `${Env.API_BASE_URL}/locations/v1/cities/autocomplete`

export const searchHandlers = [
  // search autocomplete locations
  rest.get(`${BASE_URL}`, (req, res, ctx) => {
    try {
      const query = req.url.searchParams.get('q')?.trim().toLocaleLowerCase() || ''

      if (!query) {
        return res(ctx.json([]))
      }

      const reg = new RegExp(query)

      const result = db.locations
        .getAll()
        .filter(item => item.LocalizedName?.toString().toLowerCase().match(reg))

      return res(ctx.json(result))
    } catch (error: any) {
      return res(ctx.status(400), ctx.json({ message: error?.message || 'Server Error' }))
    }
  }),
]
