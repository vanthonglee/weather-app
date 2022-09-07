// DUCKS pattern
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { WeatherForcast } from 'features/weather/types'
import type { RootState } from 'store/store'

export interface WeatherState {
  forcasts: WeatherForcast[]
  // fetching: false
  // error: false
}

const initialState: WeatherState = {
  forcasts: [],
}

// slice
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetch5DayDailyForcastsSucceeded(state, action: PayloadAction<WeatherForcast[]>) {
      // it's okay to do this here, because immer makes it immutable under the hood😊
      state.forcasts = action.payload
    },
  },
})

// Actions
export const weatherActions = {
  fetch5DayDailyForcastsSucceeded: weatherSlice.actions.fetch5DayDailyForcastsSucceeded,
  fetch5DayDailyForcasts: createAction(
    `${weatherSlice.name}/fetch5DayDailyForcasts`,
    (locationKey: string) => ({
      payload: locationKey,
    }),
  ),
}

// Selectors
export const selectForcasts = (state: RootState) => state.weather.forcasts

// Reducer
export default weatherSlice.reducer
