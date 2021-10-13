<template>
  <Layout :pages="($page.pages || {}).edges">
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
query MainPage ($path: String!) {
  pages: allMainPage(sort: [{ by: "priority", order: DESC }]) {
    edges {
        node {
            id
            path
            title
            locale
        }
    }
  }
  data: mainPage (path: $path) {
    title
    content
  }
}
</page-query>

<script>
import PageContent from "@/components/PageContent"

export default {
  components: {
    PageContent
  },
  computed: {
    pages () {
      return this.$page.pages.edges.filter(page=>page.locale===this.$i18n.locale.toString())
    }
  },
  metaInfo () {
    return {
      title: this.$page.data.title
    }
  }
}
</script>