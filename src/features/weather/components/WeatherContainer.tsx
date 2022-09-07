import Container from '@mui/material/Container'

import { InputSearchContainer } from 'features/common/search/components/InputSearchContainer'

import { WeatherList } from './WeatherList'

export const WeatherContainer = () => (
  <>
    <Container maxWidth="xs">
      <InputSearchContainer />
    </Container>
    <Container sx={{ py: 4 }} maxWidth="lg">
      <WeatherList />
    </Container>
  </>
)
