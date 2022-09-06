import { useCallback } from 'react'

import { searchActions, selectKeyword } from 'features/common/search/store'
import { useAppDispatch, useAppSelector } from 'store/hooks'

export type SearchOperators = {
  keyword: string
  setKeyword: (query: string) => void
}

/**
 * PostService custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const useSearch = (): Readonly<SearchOperators> => {
  const dispatch = useAppDispatch()

  return {
    keyword: useAppSelector(selectKeyword),

    setKeyword: useCallback(
      (query: string) => {
        dispatch(searchActions.setKeyword(query))
      },
      [dispatch],
    ),
  }
}

export default useSearch
