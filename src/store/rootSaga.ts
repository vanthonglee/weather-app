import { all, fork } from 'redux-saga/effects'

import { searchWatcherSaga } from 'features/common/search/store/search.saga'
import { weatherWatcherSaga } from 'features/weather/store/weather.saga'

export function* rootSaga() {
  yield all([fork(searchWatcherSaga), fork(weatherWatcherSaga)])
}

export default rootSaga
