<template>
  <Layout :pages="$page.pages.edges">
    <div>
      <div>

        <div>
          <h1 />      
        </div>

        <PageContent :content="$page.data.content" />

      </div>
    </div>
  </Layout>
</template>

<page-query>
query MainPage ($locale: String) {
  pages: allMainPage(filter: { locale: { eq: $locale } }, sort: [{ by: "priority", order: DESC }]) {
    edges {
        node {
            id
            path
            title
            locale
        }
    }
  }
}
</page-query>

<script>
import PageContent from "@/components/PageContent"

export default {
  components: {
    PageContent
  },
  metaInfo () {
    return {
      title: this.$page.data.title
    }
  }
}
</script>