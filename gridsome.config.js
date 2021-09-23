// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Food Not Bombs: Raleigh",
  siteUrl: `https://fnbraleigh.org`,
  host: "0.0.0.0",
  titleTemplate: "%s - FNB",
  siteDescription: "Creative technologist",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "pages/*.md",
        typeName: "MainPage",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
