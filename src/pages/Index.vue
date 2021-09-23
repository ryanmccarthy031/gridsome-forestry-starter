<template>
  <Layout :pages="$page.data.edges">
    <div class="container">
      <Hero />
    </div>
  </Layout>
</template>

<page-query>
query Pages {
  data: allMainPage {
    edges {
      node {
        id
        path
        title
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
  }
}
</script>
