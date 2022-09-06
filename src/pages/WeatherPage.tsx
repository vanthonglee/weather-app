import { useTranslation } from 'react-i18next'

import { WeatherContainer } from 'features/weather-dashboard/components/WeatherContainer'
import TitleTypography from 'libs/ui/components/TitleTypography'

const WeatherPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <TitleTypography title={t('weather.title')} />
      <WeatherContainer />
    </>
  )
}

export default WeatherPage
