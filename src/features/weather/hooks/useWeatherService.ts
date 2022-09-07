import { useCallback } from 'react'

import { weatherActions, selectForcasts } from 'features/weather/store'
import type { WeatherForcast } from 'features/weather/types'
import { useAppDispatch, useAppSelector } from 'store/hooks'

export type WeatherServiceOperators = {
  forcasts: WeatherForcast[]
  fetch5DayDailyForcasts: (locationKey: string) => void
}

/**
 * PostService custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 */

export const useWeatherService = (): Readonly<WeatherServiceOperators> => {
  const dispatch = useAppDispatch()

  return {
    forcasts: useAppSelector(selectForcasts),

    fetch5DayDailyForcasts: useCallback(
      (locationKey: string) => {
        dispatch(weatherActions.fetch5DayDailyForcasts(locationKey))
      },
      [dispatch],
    ),
  }
}

export default useWeatherService
