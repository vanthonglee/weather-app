/* eslint-disable @typescript-eslint/no-explicit-any */
import { Env } from 'config/Env'
import { Location } from 'features/common/search/types'
import makeApi from 'libs/core/configureAxios'

const api = makeApi(`${Env.API_BASE_URL}`)
const apikey = Env.ACCUWEATHER_API_KEY

const LOCATIONS_BASE_URL = `/locations/v1/cities/autocomplete`
// /v1/cities/autocomplete
// ?apikey=q&q=q
export const getLocationsAutoComplete = (query: string): Promise<Location[]> =>
  api.get(`${LOCATIONS_BASE_URL}?apikey=${apikey}/q=${encodeURIComponent(query)}`)
