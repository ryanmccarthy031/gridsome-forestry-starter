//gridsome.server.js
module.exports = function (api) {
    api.createPages(async ({ graphql, createPage }) => {
      const { data } = await graphql(`{
        allMainPage {
          edges {
            node {
                id
                path
                title
                locale
            }
          }
        }
      }`)
  
      data.allMainPage.edges.forEach(({ node }) => {
        createPage({
          path: node.path,
          component: './src/templates/MainPage.vue',
          context: {
            id: node.id,
            locale: node.locale,
            title: node.title,
          }
        })
      })
    })
  }