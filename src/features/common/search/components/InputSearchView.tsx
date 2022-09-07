import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import { Location } from 'features/common/search/types'

export type InputSearchViewProps = {
  keyword: string
  suggests: Location[]
  setKeyword: (keyword: string) => void
  onSuggestionUpdate: (keyword: string) => void
}
export const InputSearchView = (props: InputSearchViewProps) => {
  const { keyword, setKeyword, suggests, onSuggestionUpdate } = props

  const defaultProps = {
    options: suggests,
    getOptionLabel: (option: Location) =>
      typeof option === 'string' ? option : option.LocalizedName,
    getOptionSelected: (option: Location, value: Location) => option.Key === value.Key,
  }

  return (
    <>
      <Autocomplete
        id="free-solo-demo"
        {...defaultProps}
        onChange={(event: React.ChangeEvent<HTMLInputElement>, newValue: Location): void =>
          newValue && setKeyword(newValue.Key)
        }
        renderInput={params => (
          <TextField
            {...params}
            label="Search City"
            onChange={e => {
              onSuggestionUpdate(e.target.value)
            }}
          />
        )}
        sx={{ width: '300px', margin: 'auto' }}
      />
    </>
  )
}
