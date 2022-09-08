import { useCallback } from 'react'

import {
  weatherActions,
  selectForcasts,
  selectError,
  selectIsFetching,
} from 'features/weather/store'
import type { WeatherForcast } from 'features/weather/types'
import { useAppDispatch, useAppSelector } from 'store/hooks'

export type WeatherServiceOperators = {
  forcasts: WeatherForcast[]
  isFetching: boolean
  error: unknown

  fetch5DayDailyForcasts: (locationKey: string) => void
}

export const useWeatherService = (): Readonly<WeatherServiceOperators> => {
  const dispatch = useAppDispatch()

  return {
    forcasts: useAppSelector(selectForcasts),
    error: useAppSelector(selectError),
    isFetching: useAppSelector(selectIsFetching),

    fetch5DayDailyForcasts: useCallback(
      (locationKey: string) => {
        dispatch(weatherActions.fetch5DayDailyForcasts(locationKey))
      },
      [dispatch],
    ),
  }
}

export default useWeatherService
