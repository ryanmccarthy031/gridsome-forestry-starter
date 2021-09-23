<template>
  <Layout :pages="$page.journals.edges">
    <div class="container">
      <Hero />
      <LatestJournals :journals="$page.journals.edges" />
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  journals: allJournalPost {
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
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    LatestJournals
  }
}
</script>
