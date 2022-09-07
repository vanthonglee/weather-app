import { useCallback } from 'react'

import { searchActions, selectKeyword, selectSelectedLocation } from 'features/common/search/store'
import { useAppDispatch, useAppSelector } from 'store/hooks'

export type SearchOperators = {
  selectedLocation: string
  keyword: string

  setKeyword: (query: string) => void
  setSelectedLocation: (locationKey: string) => void
  removeSelectedLocation: () => void
}

/**
 * PostService custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const useSearch = (): Readonly<SearchOperators> => {
  const dispatch = useAppDispatch()

  return {
    keyword: useAppSelector(selectKeyword),
    selectedLocation: useAppSelector(selectSelectedLocation),

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
