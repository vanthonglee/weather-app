// DUCKS pattern
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { WeatherForcast } from 'features/weather/types'
import type { RootState } from 'store/store'

export interface WeatherState {
  forcasts: WeatherForcast[]
  isFetching: boolean
  error: unknown
}

const initialState: WeatherState = {
  forcasts: [],
  isFetching: false,
  error: null,
}
const fetch5DayDailyForcasts = createAction(
  `weather/fetch5DayDailyForcasts`,
  (locationKey: string) => ({
    payload: locationKey,
  }),
)
// slice
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetch5DayDailyForcastsSucceeded(state, action: PayloadAction<WeatherForcast[]>) {
      // it's okay to do this here, because immer makes it immutable under the hood😊
      state.forcasts = action.payload
      state.isFetching = false
      state.error = null
    },
    fetch5DayDailyForcastsFailed(state, action) {
      state.error = action.payload
      state.isFetching = false
    },
  },
  extraReducers: builder => {
    builder.addCase(fetch5DayDailyForcasts, state => {
      state.isFetching = true
    })
  },
})

// Actions
export const weatherActions = {
  fetch5DayDailyForcasts,
  fetch5DayDailyForcastsSucceeded: weatherSlice.actions.fetch5DayDailyForcastsSucceeded,
  fetch5DayDailyForcastsFailed: weatherSlice.actions.fetch5DayDailyForcastsFailed,
}

// Selectors
export const selectForcasts = (state: RootState) => state.weather.forcasts
export const selectError = (state: RootState) => state.weather.error
export const selectIsFetching = (state: RootState) => state.weather.isFetching
// Reducer
export default weatherSlice.reducer
