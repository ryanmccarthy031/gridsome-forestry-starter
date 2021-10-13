<template>
  <Layout :pages="($page.pages || {}).edges">
    <div>
      <Hero />
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
import Hero from "@/components/Hero"

export default {
  components: {
    Hero,
  },
}
</script>
