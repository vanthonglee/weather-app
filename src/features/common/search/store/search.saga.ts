import { SagaIterator } from 'redux-saga'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { getLocationsAutoComplete } from 'features/common/search/api'
import { searchActions } from 'features/common/search/store'
import type { Location } from 'features/common/search/types'

// Worker Sagas
function* onGetLocationsAutoComplete({
  payload,
}: {
  type: typeof searchActions
  payload: string
}): SagaIterator {
  try {
    const suggests: Location[] = yield call(getLocationsAutoComplete, payload)
    yield put(searchActions.fetchSuggestsSucceeded(suggests))
  } catch (error) {
    yield put({ type: searchActions.fetchSuggestsSucceeded.name, error })
  }
}

// Watcher Saga
export function* searchWatcherSaga(): SagaIterator {
  try {
    yield takeLatest(searchActions.fetchSuggests.type, onGetLocationsAutoComplete)
  } catch (error) {
    yield put({ type: 'SEARCH_WATCHER_SAGA_FAILED', error })
  }
}

export default searchWatcherSaga
