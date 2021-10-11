module.exports = {
    use: 'gridsome-plugin-i18n',
    options: {
        locales: [
            'es-ES',
            'en-US',
        ],
        fallbackLocale: 'en-US',
        defaultLocale: 'en-US',
    },
    enablePathGeneration: false, // disable path generation
    routes: {} // disable path generation
}