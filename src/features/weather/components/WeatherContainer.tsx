import { Typography } from '@mui/material'
import Container from '@mui/material/Container'

import { useSearch } from 'features/common/search'
import { InputSearchContainer } from 'features/common/search/components/InputSearchContainer'

import { WeatherList } from './WeatherList'

export const WeatherContainer = () => {
  const { selectedLocation, selectEntities } = useSearch()

  const SelectedLocationName =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    selectEntities && selectedLocation ? selectEntities[selectedLocation].LocalizedName : ''

  return (
    <>
      <Container maxWidth="xs">
        <InputSearchContainer />
      </Container>
      <Container sx={{ py: 4 }} maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          {SelectedLocationName}
        </Typography>
        <WeatherList />
      </Container>
    </>
  )
}
