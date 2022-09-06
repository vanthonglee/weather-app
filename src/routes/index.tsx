import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from 'components/Layout'

const HomePage = React.lazy(() => import('pages/HomePage'))
const AboutPage = React.lazy(() => import('pages/AboutPage'))
const WeatherPage = React.lazy(() => import('pages/WeatherPage'))

const AppRoutes = () => (
  <>
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Route>
      </Routes>
    </Suspense>
  </>
)

export default AppRoutes
