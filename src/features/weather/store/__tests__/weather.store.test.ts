import reducer, { weatherActions, selectForcasts } from 'features/weather/store/weather.slice'
import type { WeatherForcast } from 'features/weather/types'
import { RootState, store } from 'store/store'

const expectedForcasts = [
  {
    Date: '2022-09-06T07:00:00+08:00',
    Temperature: {
      Minimum: {
        Value: 24,
        Unit: 'F',
      },
      Maximum: {
        Value: 79,
        Unit: 'F',
      },
    },
  },
  {
    Date: '2022-09-07T07:00:00+08:00',
    Temperature: {
      Minimum: {
        Value: 64,
        Unit: 'F',
      },
      Maximum: {
        Value: 81,
        Unit: 'F',
      },
    },
  },
]

describe('State tests', () => {
  it('should initially set post to an empty array', () => {
    const state = store.getState().weather
    expect(state.forcasts.length).toEqual(0)
  })
})

describe('Reducer tests', () => {
  it('should return the initial state when passed an empty action', () => {
    // Given
    const initialState = undefined

    const action = { type: '' }

    // When
    const result = reducer(initialState, action)

    // Then
    expect(result).toEqual({ forcasts: [], isFetching: false, error: null })
  })

  it('should add received forcasts', () => {
    // Given
    const initialState = undefined

    const action = weatherActions.fetch5DayDailyForcastsSucceeded(expectedForcasts)

    // When
    const result = reducer(initialState, action)

    // Then
    expect(Object.keys(result.forcasts).length).toEqual(expectedForcasts.length)
    expect(result.forcasts).toEqual(expectedForcasts)
  })
})

describe('Selectors tests', () => {
  it('should return empty Forcasts', () => {
    const initState = {
      forcasts: [],
      isFetching: false,
      error: null,
    }

    // Given
    const state: RootState = {
      weather: initState,
      router: {},
    }

    // When
    const result = selectForcasts(state)

    // Then
    expect(result).toEqual(initState.forcasts)
  })
})

const expectedSagaWeatherForcasts: WeatherForcast[] = [...expectedForcasts]

jest.mock('../../api/index', () => ({
  async get5DayDailyForcasts() {
    return expectedSagaWeatherForcasts
  },
}))

describe('Saga tests', () => {
  it('should return 5 forcasts when fetch5DayDailyForcasts dispatched (using mocked Rest API)', async () => {
    // Given
    const locationKey = '1111'

    // When
    await store.dispatch(weatherActions.fetch5DayDailyForcasts(locationKey))

    // Then
    expect(store.getState().weather.forcasts).toEqual(expectedSagaWeatherForcasts)
  })
})
