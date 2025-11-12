// i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nConfig } from './config';

// Import translations
import viCommon from './locales/vi/common.json';
import enCommon from './locales/en/common.json';

const resources = {
  vi: {
    common: viCommon,
  },
  en: {
    common: enCommon,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'common',
    fallbackLng: i18nConfig.fallbackLocale,
    lng: i18nConfig.defaultLocale,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

