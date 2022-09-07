// DUCKS pattern
import { createAction, createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit'

import { Location } from 'features/common/search/types'
import type { RootState } from 'store/store'

// export interface SearchState {
//   keyword: string
//   suggests: { [id: string]: Location }

//   // fetching: false
//   // error: false
// }

// const initialState: SearchState = {
//   keyword: '',
//   suggests: {},
// }

const searchAdapter = createEntityAdapter<Location>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: location => location.Key,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.LocalizedName.localeCompare(b.LocalizedName),
})

// slice
export const searchSlice = createSlice({
  name: 'search',
  initialState: searchAdapter.getInitialState({
    // entities: {
    //   '1111': { Key: '1111', LocalizedName: 'HCM' },
    //   '2222': { Key: '2222', LocalizedName: 'DN' },
    // },
    // ids: ['1111', '2222'],
    keyword: '',
  }),
  reducers: {
    setKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload
    },
    fetchSuggestsSucceeded(state, action) {
      searchAdapter.setAll(state, action.payload)
    },
  },
})

// Actions
export const searchActions = {
  setKeyword: searchSlice.actions.setKeyword,
  fetchSuggestsSucceeded: searchSlice.actions.fetchSuggestsSucceeded,
  fetchSuggests: createAction(`${searchSlice.name}/fetchSuggests`, (query: string) => ({
    payload: query,
  })),
}

// Selectors
export const selectKeyword = (state: RootState) => state.search.keyword
export const searchSelectors = searchAdapter.getSelectors<RootState>(state => state.search)

// Reducer
export default searchSlice.reducer
