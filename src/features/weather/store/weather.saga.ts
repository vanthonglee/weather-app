import { SagaIterator } from 'redux-saga'
import { call, delay, put, takeEvery } from 'redux-saga/effects'

import { get5DayDailyForcasts } from '../api'
import { WeatherForcast } from '../types'

import { weatherActions } from './weather.slice'

// Worker Sagas
function* onGet5DayDailyForcasts({
  payload,
}: {
  type: typeof weatherActions.fetch5DayDailyForcasts
  payload: string
}): SagaIterator {
  try {
    yield delay(200)
    const response = yield call(get5DayDailyForcasts, payload)
    const forcasts: WeatherForcast[] = response.DailyForecasts
    yield put(weatherActions.fetch5DayDailyForcastsSucceeded(forcasts))
  } catch (error) {
    yield put(weatherActions.fetch5DayDailyForcastsFailed(error))
  }
}

// Watcher Saga
export function* weatherWatcherSaga(): SagaIterator {
  yield takeEvery(weatherActions.fetch5DayDailyForcasts.type, onGet5DayDailyForcasts)
}

export default weatherWatcherSaga
