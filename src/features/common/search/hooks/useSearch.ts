import { useCallback } from 'react'

import {
  searchActions,
  selectEntities,
  selectKeyword,
  selectSelectedLocation,
} from 'features/common/search/store'
import { useAppDispatch, useAppSelector } from 'store/hooks'

export type SearchOperators = {
  selectedLocation: string
  keyword: string
  selectEntities: object

  setKeyword: (query: string) => void
  setSelectedLocation: (locationKey: string) => void
  removeSelectedLocation: () => void
}

export const useSearch = (): Readonly<SearchOperators> => {
  const dispatch = useAppDispatch()

  return {
    keyword: useAppSelector(selectKeyword),
    selectedLocation: useAppSelector(selectSelectedLocation),
    selectEntities: useAppSelector(selectEntities),

    setKeyword: useCallback(
      (query: string) => {
        dispatch(searchActions.setKeyword(query))
      },
      [dispatch],
    ),
    setSelectedLocation: useCallback(
      (locationKey: string) => {
        dispatch(searchActions.setSelectedLocation(locationKey))
      },
      [dispatch],
    ),
    removeSelectedLocation: useCallback(() => {
      dispatch(searchActions.resetAll())
    }, [dispatch]),
  }
}

export default useSearch
