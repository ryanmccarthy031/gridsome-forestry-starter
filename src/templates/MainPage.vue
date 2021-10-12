<template>
  <Layout>
    <div class="journal text-gray-100">
      <div class="container journal-container">

        <div class="journal-header">
          <h1 v-html="$page.data.title" class="journal-title" />      
        </div>

        <PageContent :content="$page.data.content" />

      </div>
    </div>
  </Layout>
</template>

<page-query>
query MainPage ($path: String!, $locale: String) {
  data: mainPage (path: $path) {
    title
    content
  }
  pages: allMainPage(filter: { locale: { eq: $locale } }) {
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
  created () {
    console.log(this.$i18n.locale)
    console.log(this.$page)
  },
  metaInfo () {
    return {
      title: this.$page.data.title
    }
  }
}
</script>

<style scoped>
.journal-container {
  max-width: 840px;
}
.journal-header {
  padding: 2rem 0 4rem 0;
}
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}
</style>
