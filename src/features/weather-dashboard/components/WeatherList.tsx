import { Grid } from '@mui/material'
import React from 'react'

import { WeatherCardView } from './WeatherCardView'

export const WeatherList = () => (
  <>
    <Grid container spacing={2} sx={{ width: '100%' }}>
      <WeatherCardView />
      <WeatherCardView />
      <WeatherCardView />
      <WeatherCardView />
      <WeatherCardView />
    </Grid>
  </>
)
