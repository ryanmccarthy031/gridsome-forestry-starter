// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config
const i18n = require('./plugins/i18n');
const languages = require('./plugins/languages');
const pages = require('./plugins/pages')

module.exports = {
  siteName: "Food Not Bombs: Raleigh",
  siteUrl: `https://fnbraleigh.org`,
  host: "0.0.0.0",
  titleTemplate: "%s - FNB",
  siteDescription: "An Autonomous Collective",
  plugins: [ i18n, pages ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
