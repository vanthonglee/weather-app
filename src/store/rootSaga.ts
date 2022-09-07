import { all, fork } from 'redux-saga/effects'

import { searchWatcherSaga } from 'features/common/search/store/search.saga'
import { postsWatcherSaga } from 'features/posts/store/posts.sagas'
import { weatherWatcherSaga } from 'features/weather/store/weather.saga'

export function* rootSaga() {
  yield all([fork(postsWatcherSaga), fork(searchWatcherSaga), fork(weatherWatcherSaga)])
}

export default rootSaga
