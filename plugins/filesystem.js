module.exports = {
    use: "@gridsome/source-filesystem",
    options: {
        path: "pages/**/*.md",
        typeName: "MainPage",
        resolveAbsolutePaths: true,
        component: './src/templates/Page.vue',
        remark: {
            externalLinksTarget: "_blank",
            externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
    }
}