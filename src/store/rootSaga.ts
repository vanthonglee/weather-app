import { all, fork } from 'redux-saga/effects'

import { searchWatcherSaga } from 'features/common/search/store/search.saga'
import { postsWatcherSaga } from 'features/posts/store/posts.sagas'

export function* rootSaga() {
  yield all([fork(postsWatcherSaga), fork(searchWatcherSaga)])
}

export default rootSaga
