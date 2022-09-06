import Container from '@mui/material/Container'

import { InputSearchContainer } from 'features/common/search/components/InputSearchContainer'

import { WeatherList } from './WeatherList'

// import React, { useEffect } from 'react'

// import { PostForm } from 'features/posts/components/PostForm'
// import { PostList } from 'features/posts/components/PostList'
// import { usePostService } from 'features/posts/hooks/usePostService'

// eslint-disable-next-line arrow-body-style
export const WeatherContainer = () => {
  //   const { posts, deletePost, updatePost, fetchAllPosts, createPost } = usePostService()

  //   useEffect(() => {
  //     fetchAllPosts()
  //   }, [fetchAllPosts])
  return (
    <>
      <Container maxWidth="xs">
        <InputSearchContainer />
      </Container>
      <Container sx={{ py: 4 }} maxWidth="lg">
        <WeatherList />
      </Container>
    </>
  )
}
