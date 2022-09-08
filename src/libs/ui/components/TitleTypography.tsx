import Typography from '@mui/material/Typography'
import React from 'react'

type PageTypographyProps = {
  title: string
}

const TitleTypography = (props: PageTypographyProps) => (
  <>
    <Typography
      component="h1"
      variant="h2"
      align="center"
      color="text.primary"
      gutterBottom
      sx={{
        background: '-webkit-linear-gradient(45deg, #09009f, #00ff95 80%)',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        fontWeight: 'bold',
      }}
    >
      {props.title}
    </Typography>
  </>
)

export default TitleTypography
