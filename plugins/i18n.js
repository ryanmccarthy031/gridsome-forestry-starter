module.exports = {
    use: 'gridsome-plugin-i18n',
    options: {
        locales: [
            'es-es',
            'en-us',
          ],
        fallbackLocale: 'en-us',
        defaultLocale: 'en-us',
    },
    enablePathGeneration: false, // disable path generation
    routes: {} // disable path generation
}