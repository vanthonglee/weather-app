/* eslint-disable @typescript-eslint/no-explicit-any */

import { rest } from 'msw'

import Env from 'config/Env'
import { db } from 'test/msw/db'

const BASE_URL = `${Env.API_BASE_URL}/forecasts`

export const weatherHandlers = [
  // fetch 5 day daily forcasts
  rest.get(`${BASE_URL}/v1/daily/5day/:locationKey`, (req, res, ctx) => {
    try {
      const { locationKey } = req.params

      if (!locationKey) {
        return res(ctx.status(404), ctx.json([]))
      }

      const result = db.weathers.findFirst({
        where: {
          id: {
            equals: locationKey,
          },
        },
      })

      return res(ctx.json(result))
    } catch (error: any) {
      return res(ctx.status(400), ctx.json({ message: error?.message || 'Server Error' }))
    }
  }),
]
