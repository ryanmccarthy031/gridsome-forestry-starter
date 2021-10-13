<template>
  <div>
    <Header />
    <slot/>
    <Footer />
    <Sidebar :pages="pages" />

  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {
    Header,
    Footer
  },
  props: ['pages'],
}
</script>