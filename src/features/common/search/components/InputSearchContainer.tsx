import { useSearch, useSearchService } from '../hooks'

import { InputSearchView } from './InputSearchView'

// import React, { useEffect } from 'react'

// import { PostForm } from 'features/posts/components/PostForm'
// import { PostList } from 'features/posts/components/PostList'
// import { usePostService } from 'features/posts/hooks/usePostService'

// eslint-disable-next-line arrow-body-style
export const InputSearchContainer = () => {
  //   const { posts, deletePost, updatePost, fetchAllPosts, createPost } = usePostService()
  const { keyword, setKeyword } = useSearch()
  const { suggests, fetchLocationsAutocomplete } = useSearchService()

  //   useEffect(() => {
  //     fetchAllPosts()
  //   }, [fetchAllPosts])

  return (
    <InputSearchView
      keyword={keyword}
      setKeyword={setKeyword}
      suggests={suggests}
      onSuggestionUpdate={fetchLocationsAutocomplete}
    />
  )
}
