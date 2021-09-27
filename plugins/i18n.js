module.exports = {
    use: 'gridsome-plugin-i18n',
    options: {
        locales: [
            'es-es',
            'en-us'
          ],
          pathAliases: {
            'es-es': 'es',
            'en-us': 'en'
          },
        defaultLocale: 'en-us',
    },
    enablePathGeneration: false, // disable path generation
    routes: {} // disable path generation
  }