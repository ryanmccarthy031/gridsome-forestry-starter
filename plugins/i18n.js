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
            'en-US': require('../locales/en-us.json'), // Messages files
            'es-ES': require('../locales/es-es.json'),
          }
    },
}