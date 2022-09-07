import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import type { Location } from 'features/common/search/types'

type InputSearchViewProps = {
  suggests: Location[]

  onSuggestionUpdate: (keyword: string) => void
  onSelectedChange: (
    _: React.SyntheticEvent<Element, Event>,
    value: string | Location | null,
  ) => void
  onInputChange: (_: React.SyntheticEvent<Element, Event>, newInputValue: string) => void
}

export const InputSearchView = (props: InputSearchViewProps) => {
  const { suggests, onSelectedChange, onInputChange } = props

  const defaultProps = {
    options: suggests,
    getOptionLabel: (option: Location) =>
      typeof option === 'string' ? option : option.LocalizedName,
  }

  return (
    <>
      <Autocomplete
        id="free-solo-demo"
        {...defaultProps}
        onChange={onSelectedChange}
        onInputChange={onInputChange}
        renderInput={params => <TextField {...params} label="Search City" />}
        sx={{ width: '300px', margin: 'auto' }}
      />
    </>
  )
}
