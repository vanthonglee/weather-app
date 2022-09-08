/* eslint-disable @typescript-eslint/no-explicit-any */
import { Env } from 'config/Env'
import type { WeatherForcast } from 'features/weather/types'
import makeApi from 'libs/core/configureAxios'

const api = makeApi(`${Env.API_BASE_URL}`)
const apikey = Env.ACCUWEATHER_API_KEY

const FORCASTS_BASE_URL = `/forecasts/v1/daily/5day`
// forecasts/v1/daily/5day/13222
// ?apikey=uhFkEj4NfLu1fg28LLkRckXTHv9T7EWM

export const get5DayDailyForcasts = (locationKey: string): Promise<WeatherForcast[]> =>
  api.get(`${FORCASTS_BASE_URL}/${locationKey}?apikey=${apikey}`)
