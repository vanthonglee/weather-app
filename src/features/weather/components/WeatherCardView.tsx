import { Box, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import { WeatherForcast } from '../types'

const CPaper = styled(Paper)(() => ({
  margin: 'auto',
  padding: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 10,
}))

type WeatherCardViewProps = {
  forcast: WeatherForcast
}

export const WeatherCardView = (props: WeatherCardViewProps) => {
  const { forcast } = props
  const date = new Date(forcast?.Date).toLocaleDateString('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
  })
  const minTem = forcast?.Temperature?.Minimum?.Value
  const maxTem = forcast?.Temperature?.Maximum?.Value

  return (
    <>
      <Grid item xs={12 / 5}>
        <CPaper elevation={2}>
          <Typography variant="h6" gutterBottom>
            {date}
          </Typography>
          <Box>
            {minTem}&deg;F - {maxTem}&deg;F
          </Box>
        </CPaper>
      </Grid>
    </>
  )
}
