import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from 'config/i18n/locales/en.translation.json'
import vn from 'config/i18n/locales/vn.translation.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: en,
    },
    vn: {
      translation: vn,
    },
  },
  debug: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
