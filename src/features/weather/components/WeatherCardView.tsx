import { Box, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const CPaper = styled(Paper)(() => ({
  margin: 'auto',
  padding: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 10,
}))

export const WeatherCardView = () => (
  <>
    <Grid
      item
      xs={12 / 5}
      // key={post.id}
    >
      <CPaper elevation={2}>
        <Typography variant="h5" gutterBottom>
          Monday
        </Typography>
        <Box>20&#8451; - 30&#8451; </Box>
      </CPaper>
    </Grid>
  </>
)
