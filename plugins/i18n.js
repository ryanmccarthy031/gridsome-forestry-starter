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
            'en-US': require('../locales/en-US.json'), // Messages files
            'es-ES': require('../locales/es-ES.json'),
          }
    },
}