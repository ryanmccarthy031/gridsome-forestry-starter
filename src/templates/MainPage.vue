<template>
  <Layout :pages="pages">
    <div class="grid grid-cols-12">
      <div class="prose col-span-12 md:col-span-8 md:col-start-3 px-8 py-2">
        <div>
          <h1>{{ $page.data.title }}</h1>
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
      return this.$page.pages.edges.filter(page=>page.node.locale===this.$context.locale)
    }
  },
  metaInfo () {
    return {
      title: this.$page.data.title
    }
  }
}
</script>