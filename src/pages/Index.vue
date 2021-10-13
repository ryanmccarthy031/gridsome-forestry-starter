<template>
  <Layout :pages="$page.pages.edges">
    <div>
      <Hero />
    </div>
  </Layout>
</template>
<script>
import Hero from "@/components/Hero"

export default {
  components: {
    Hero,
  },
}
</script>
