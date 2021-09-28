module.exports = {
    use: "@gridsome/source-filesystem",
    options: {
        path: "content/languages/*.md",
        typeName: "Langugage",
    }
}