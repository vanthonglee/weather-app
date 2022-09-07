import { Grid, Typography } from '@mui/material'

import { useWeatherService } from '../hooks'

import { WeatherCardView } from './WeatherCardView'

export const WeatherList = () => {
  const { error, forcasts, isFetching } = useWeatherService()

  if (isFetching) {
    return (
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ background: 'black', color: 'white' }}
      >
        Loadding
      </Typography>
    )
  }

  if (error) {
    return (
      <Typography variant="h3" align="center" gutterBottom sx={{ background: 'yellow' }}>
        Sorry! We Cannot Fetch Daily Forcasts
      </Typography>
    )
  }

  return (
    <>
      <Grid container spacing={2} sx={{ width: '100%' }}>
        {forcasts &&
          forcasts.map((item, index) => <WeatherCardView key={`WC-${index}`} forcast={item} />)}
      </Grid>
    </>
  )
}
