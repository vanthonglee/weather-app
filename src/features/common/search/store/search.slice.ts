// DUCKS pattern
import { createAction, createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit'

import { Location } from 'features/common/search/types'
import type { RootState } from 'store/store'

export interface SearchState {
  keyword: string
  suggests: { [id: string]: Location }

  // fetching: false
  // error: false
}

const initialState: SearchState = {
  keyword: '',
  suggests: {},
}

// slice
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload
    },
    fetchSuggestsSucceeded(state, action: PayloadAction<Location[]>) {
      state.suggests = action.payload
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
export const selectSuggests = (state: RootState) => state.search.suggests

// Reducer
export default searchSlice.reducer
