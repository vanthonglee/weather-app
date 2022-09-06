import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import { Location } from 'features/common/search/types'

// import React, { useEffect } from 'react'

// import { PostForm } from 'features/posts/components/PostForm'
// import { PostList } from 'features/posts/components/PostList'
// import { usePostService } from 'features/posts/hooks/usePostService'

export type InputSearchViewProps = {
  keyword: string
  suggests: Location[]
  setKeyword: (keyword: string) => void
  onSuggestionUpdate: (keyword: string) => void
}
export const InputSearchView = (props: InputSearchViewProps) => {
  const { keyword, setKeyword, suggests, onSuggestionUpdate } = props

  const defaultProps = {
    options: suggests || [],
    getOptionLabel: (option: Location) => option.LocalizedName,
  }

  return (
    <>
      <Autocomplete
        inputValue={keyword}
        id="free-solo-demo"
        {...defaultProps}
        // onChange={(event, newValue: Location) => setKeyword(newValue.LocalizedName)}
        renderInput={params => {
          // console.log('params', params)
          return (
            <TextField
              {...params}
              label="Search City"
              onChange={e => {
                setKeyword(e.target.value)
                onSuggestionUpdate(e.target.value)
              }}
            />
          )
        }}
        sx={{ width: '300px', margin: 'auto' }}
      />
    </>
  )
}
