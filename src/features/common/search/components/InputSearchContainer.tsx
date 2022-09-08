import useWeatherService from 'features/weather/hooks/useWeatherService'

import { useSearch, useSearchService } from '../hooks'
import { Location } from '../types'

import { InputSearchView } from './InputSearchView'

export const InputSearchContainer = () => {
  const { suggests, fetchLocationsAutocomplete } = useSearchService()

  const { setSelectedLocation, removeSelectedLocation } = useSearch()
  const { fetch5DayDailyForcasts } = useWeatherService()

  const onSelectedChange = (
    _: React.SyntheticEvent<Element, Event>,
    value: string | Location | null,
  ): void => {
    if (!value) {
      removeSelectedLocation()
    } else {
      setSelectedLocation((value as Location).Key)
      fetch5DayDailyForcasts((value as Location).Key)
    }
  }

  const onInputChange = (_: React.SyntheticEvent<Element, Event>, newInputValue: string) => {
    if (!newInputValue) {
      removeSelectedLocation()
    } else {
      fetchLocationsAutocomplete(newInputValue)
    }
  }

  return (
    <InputSearchView
      suggests={suggests}
      onSuggestionUpdate={fetchLocationsAutocomplete}
      onSelectedChange={onSelectedChange}
      onInputChange={onInputChange}
    />
  )
}
