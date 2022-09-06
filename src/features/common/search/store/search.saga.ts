import { SagaIterator } from 'redux-saga'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { getLocationsAutoComplete } from 'features/common/search/api'
import { searchActions } from 'features/common/search/store'
import { Location } from 'features/common/search/types'

// Worker Sagas
function* onGetLocationsAutoComplete({
  payload,
}: {
  type: typeof searchActions
  payload: string
}): SagaIterator {
  const suggests: Location[] = yield call(getLocationsAutoComplete, payload)
  yield put(searchActions.fetchSuggestsSucceeded(suggests))
}

// Watcher Saga
export function* searchWatcherSaga(): SagaIterator {
  yield takeEvery(searchActions.fetchSuggests.type, onGetLocationsAutoComplete)
}

export default searchWatcherSaga