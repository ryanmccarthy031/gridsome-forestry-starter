module.exports = {
    use: 'gridsome-plugin-i18n',
    options: {
        locales: [
            'es-ES',
            'en-US',
        ],
        fallbackLocale: 'en-US',
        defaultLocale: 'en-US',
        messages: {
            'en-us': require('../locales/en-us.json'), // Messages files
            'es-es': require('../locales/es-es.json'),
          }
    },
}