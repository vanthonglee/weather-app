// DUCKS pattern
import { createAction, createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit'

import type { Location } from 'features/common/search/types'
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
    selectedLocation: '',
  }),
  reducers: {
    setKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload
    },
    setSelectedLocation(state, action: PayloadAction<string>) {
      state.selectedLocation = action.payload
    },
    fetchSuggestsSucceeded(state, action) {
      searchAdapter.setAll(state, action.payload)
    },
    resetAll(state) {
      searchAdapter.removeAll(state)
      state.selectedLocation = ''
    },
  },
})

// Actions
export const searchActions = {
  setKeyword: searchSlice.actions.setKeyword,
  setSelectedLocation: searchSlice.actions.setSelectedLocation,
  fetchSuggestsSucceeded: searchSlice.actions.fetchSuggestsSucceeded,
  fetchSuggests: createAction(`${searchSlice.name}/fetchSuggests`, (query: string) => ({
    payload: query,
  })),
  resetAll: searchSlice.actions.resetAll,
}

// Selectors
export const selectKeyword = (state: RootState) => state.search.keyword
export const selectSelectedLocation = (state: RootState) => state.search.selectedLocation
export const searchSelectors = searchAdapter.getSelectors<RootState>(state => state.search)

// Reducer
export default searchSlice.reducer
