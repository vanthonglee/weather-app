import { Box, Link } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink as RouterLink } from 'react-router-dom'

import TitleTypography from 'libs/ui/components/TitleTypography'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <TitleTypography title={t('home.title')} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link
          component={RouterLink}
          to={'/weather'}
          variant="button"
          color="text.primary"
          fontSize={64}
          sx={{
            my: 1,
            mx: 1.5,
            p: 2,
            border: '1px dashed grey',

            background: '-webkit-linear-gradient(45deg, #CF4023, #DEDE5B 100%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          {t('navigation.links.weather')}
        </Link>
      </Box>
    </>
  )
}

export default HomePage
