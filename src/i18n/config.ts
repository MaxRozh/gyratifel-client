import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

// import enCommon from './en/common.json';
// import ruCommon from './ru/common.json';
//
// const resources = {
//   en: {
//     common: enCommon
//   },
//   ru: {
//     common: ruCommon
//   }
// } as const;
const DEFAULT_LANGUAGE = 'en';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    defaultNS: 'common',
    ns: ['common'],
    interpolation: {
      escapeValue: false
    },
    load: 'currentOnly',
    supportedLngs: ['en', 'ru']
    // resources
  });
