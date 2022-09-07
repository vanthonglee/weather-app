import { useCallback } from 'react'

import { searchActions, searchSelectors } from 'features/common/search/store'
import type { Location } from 'features/common/search/types'
import { useAppDispatch, useAppSelector } from 'store/hooks'

export type SearchServiceOperators = {
  suggests: Location[]
  fetchLocationsAutocomplete: (query: string) => void
}

/**
 * PostService custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 */

export const useSearchService = (): Readonly<SearchServiceOperators> => {
  const dispatch = useAppDispatch()

  return {
    suggests: useAppSelector(searchSelectors.selectAll),

    fetchLocationsAutocomplete: useCallback(
      (query: string) => {
        dispatch(searchActions.fetchSuggests(query))
      },
      [dispatch],
    ),
  }
}

export default useSearchService
