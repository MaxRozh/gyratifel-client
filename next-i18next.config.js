// eslint-disable-next-line @typescript-eslint/no-var-requires
const { list, defaultLocale } = require('./src/constants/locales');

module.exports = {
  i18n: {
    defaultLocale,
    fallbackLng: defaultLocale,
    locales: list,
    defaultNS: 'common',
    otherLanguages: list,
    browserLanguageDetection: true,
    serverLanguageDetection: true,
    ignoreRoutes: ['/_next/', '/public/', '/api/', '/service-worker.js', '/service-worker.js.map', '/health']
  }
};
